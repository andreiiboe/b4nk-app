import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { ChevronLeft, CreditCard, Plus } from 'lucide-react';

const DepositPage = () => {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (value) => {
    // Убираем все нечисловые символы кроме точки
    const cleanValue = value.replace(/[^\d.]/g, '');
    // Проверяем, что это валидное число с не более чем 2 знаками после точки
    if (/^\d*\.?\d{0,2}$/.test(cleanValue)) {
      setAmount(cleanValue);
    }
  };

  const predefinedAmounts = [100, 200, 500, 1000];

  const paymentMethods = [
    { id: 'card', title: 'Credit / Debit card', icon: <CreditCard className="h-6 w-6" />, description: 'Instant deposit' },
    { id: 'bank', title: 'Bank transfer', icon: '🏦', description: '2-3 business days' },
    { id: 'apple', title: 'Apple Pay', icon: '🍎', description: 'Instant deposit' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Верхняя панель */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b">
        <div className="flex items-center space-x-3">
          <button className="hover:bg-gray-100 p-1 rounded-full">
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <h2 className="text-lg font-semibold">Deposit</h2>
        </div>
      </div>

      {/* Основной контент */}
      <div className="p-4 space-y-6">
        {/* Ввод суммы */}
        <Card className="p-4">
          <div className="space-y-4">
            <label className="block text-sm text-gray-500">Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400">$</span>
              <input
                type="text"
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                className="w-full text-2xl font-bold px-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0"
              />
            </div>
          </div>
        </Card>

        {/* Быстрые суммы */}
        <div className="grid grid-cols-4 gap-2">
          {predefinedAmounts.map((value) => (
            <button
              key={value}
              onClick={() => setAmount(value.toString())}
              className="p-3 border rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              ${value}
            </button>
          ))}
        </div>

        {/* Способы оплаты */}
        <div className="space-y-2">
          <h3 className="text-sm text-gray-500 px-1">Payment method</h3>
          <Card className="divide-y">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                className="w-full p-4 flex items-center space-x-4 hover:bg-gray-50 active:bg-gray-100 transition-colors text-left"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                  {typeof method.icon === 'string' ? method.icon : method.icon}
                </div>
                <div>
                  <div className="font-medium">{method.title}</div>
                  <div className="text-sm text-gray-500">{method.description}</div>
                </div>
              </button>
            ))}
          </Card>
        </div>

        {/* Кнопка продолжить */}
        <button
          className={`w-full p-4 rounded-lg text-white font-medium transition-colors ${
            amount ? 'bg-blue-600 hover:bg-blue-500' : 'bg-gray-300 cursor-not-allowed'
          }`}
          disabled={!amount}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default DepositPage;
