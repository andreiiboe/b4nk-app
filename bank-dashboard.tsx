import React from 'react';
import { Card } from "@/components/ui/card";
import { Download, Upload } from 'lucide-react';

const formatUSD = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

const DashboardComponent = () => {
  const transactions = [
    { id: 1, title: 'TurboSquidShutterstock', amount: -99.00, date: 'Oct 27 · 21:46', icon: '💳', type: 'outgoing' },
    { id: 2, title: 'OPENAI', amount: -20.00, date: 'Oct 27 · 14:14', icon: '💳', type: 'outgoing' },
    { id: 3, title: 'AMAZON.COM', amount: 409.78, date: 'Oct 27 · 08:08', icon: '$', type: 'incoming' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Верхняя панель */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b">
        <h2 className="text-xl font-bold text-blue-600">B4NK</h2>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm">
            JS
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="p-4 space-y-4">
        {/* Сетка карточек 2x2 */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          {/* Баланс */}
          <Card className="flex items-center justify-center h-24">
            <div className="text-2xl font-bold">{formatUSD(15850.00)}</div>
          </Card>
          
          {/* Депозит */}
          <Card className="hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors h-24">
            <div className="flex items-center justify-center h-full space-x-2">
              <Download className="h-6 w-6 text-blue-500" />
              <span className="font-medium text-lg">Deposit</span>
            </div>
          </Card>

          {/* Карта */}
          <Card className="hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors h-24">
            <div className="flex items-center justify-center h-full">
              <span className="font-medium text-lg">Card</span>
            </div>
          </Card>

          {/* Вывод */}
          <Card className="hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors h-24">
            <div className="flex items-center justify-center h-full space-x-2">
              <Upload className="h-6 w-6 text-blue-500" />
              <span className="font-medium text-lg">Withdraw</span>
            </div>
          </Card>
        </div>

        {/* История операций */}
        <Card>
          <div className="p-4">
            <h2 className="text-lg font-medium mb-4">Transaction History</h2>
            <div className="space-y-4">
              {transactions.map(transaction => (
                <div key={transaction.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                      {transaction.icon}
                    </div>
                    <div>
                      <div className="text-[15px] font-medium">{transaction.title}</div>
                      <div className="text-sm text-gray-500">{transaction.date}</div>
                    </div>
                  </div>
                  <div className={`text-[15px] font-medium ${
                    transaction.type === 'incoming' ? 'text-green-500' : 'text-gray-900'
                  }`}>
                    {transaction.type === 'incoming' ? '+' : '-'}
                    {formatUSD(Math.abs(transaction.amount))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardComponent;
