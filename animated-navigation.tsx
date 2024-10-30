import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Route, Routes } from 'react-router-dom';

// Компонент обертки для анимации
const AnimatedPage = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: '100%'
    },
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: '-100%'
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.3
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

// Основной компонент с роутингом
const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <AnimatedPage>
              <DashboardComponent />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/deposit" 
          element={
            <AnimatedPage>
              <DepositPage />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/withdraw" 
          element={
            <AnimatedPage>
              <WithdrawPage />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/card" 
          element={
            <AnimatedPage>
              <CardDetails />
            </AnimatedPage>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

// Хук для программной навигации с анимацией
const useAnimatedNavigation = () => {
  const navigate = useNavigate();

  const navigateWithAnimation = (to) => {
    navigate(to);
  };

  return navigateWithAnimation;
};

// Пример использования в компоненте
const DashboardComponent = () => {
  const navigate = useAnimatedNavigation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Верхняя панель */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white px-4 py-3 flex items-center justify-between border-b"
      >
        <h2 className="text-xl font-bold text-blue-600">B4NK</h2>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm">
            JS
          </div>
        </div>
      </motion.div>

      {/* Основной контент */}
      <div className="p-4 space-y-4">
        <motion.div 
          className="grid grid-cols-2 grid-rows-2 gap-3"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {/* Карточки с действиями */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Card className="flex items-center justify-center h-24">
              <div className="text-2xl font-bold">$15,850.00</div>
            </Card>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/deposit')}
          >
            <Card className="h-24 cursor-pointer">
              <div className="flex items-center justify-center h-full space-x-2">
                <Download className="h-6 w-6 text-blue-500" />
                <span className="font-medium text-lg">Deposit</span>
              </div>
            </Card>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/card')}
          >
            <Card className="h-24 cursor-pointer">
              <div className="flex items-center justify-center h-full">
                <span className="font-medium text-lg">Card</span>
              </div>
            </Card>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/withdraw')}
          >
            <Card className="h-24 cursor-pointer">
              <div className="flex items-center justify-center h-full space-x-2">
                <Upload className="h-6 w-6 text-blue-500" />
                <span className="font-medium text-lg">Withdraw</span>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* История транзакций */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            {/* ... содержимое истории транзакций ... */}
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
