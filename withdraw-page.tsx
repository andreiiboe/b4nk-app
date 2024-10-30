import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { ChevronLeft, Building, CreditCard } from 'lucide-react';

const WithdrawPage = () => {
  const [amount, setAmount] = useState('');
  const balance = 15850.00;

  const handleAmountChange = (value) => {
    const cleanValue = value.replace(/[^\d.]/g, '');
    if (/^\d*\.?\d{0,2}$/.test(cleanValue)) {
      if (Number(cleanValue) <= balance) {
        setAmount(cleanValue);
      }
    }
  };

  const predefinedAmounts = [100, 500, 1000, 5000];

  const withdrawMethods = [
    {
      id: 'bank',
      title: 'To bank account',
      icon: <Building className="h-6 w-6" />,
      description: '2-3 business days',
      fee: 'No fee'
    },
    {
      id: 'card',
      title: 'To debit card',
      icon: <CreditCard className="h-6 w-6" />,
      description: '30 minutes - 2 hours',
      fee: '1.5% fee'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Верхняя панель */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b">
        <div className="flex items-center space-x-3">
          <button className="hover:bg-gray-100 p-1 rounded-full">
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <h2 className="text-lg font-semibold">Withdraw</h2>
        </div>
      </div>

      {/* Основной контент */}
      <div className="p-4 space-y-6">
        {/* Доступный баланс */}
        <div className="px-1">
          <div className="text-sm text-gray-500">Available balance</div>
          <div className="text-2xl font-bold">
            ${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>

        {/* Ввод суммы */}
        <Card className="p-4">
          <div className="space-y-4">
            <label className="block text-sm text-gray-500">Amount to withdraw</label>
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
              onClick={() => handleAmountChange(value.toString())}
              className={`p-3 border rounded-lg transition-colors ${
                value <= balance 
                  ? 'hover:bg-gray-50 active:bg-gray-100' 
                  : 'opacity-50 cursor-not-allowed'
              }`}
              disabled={value > balance}
            >
              ${value}
            </button>
          ))}
        </div>

        {/* Способы вывода */}
        <div className="space-y-2">
          <h3 className="text-sm text-gray-500 px-1">Withdraw to</h3>
          <Card className="divide-y">
            {withdrawMethods.map((method) => (
              <button
                key={method.id}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 active:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    {method.icon}
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{method.title}</div>
                    <div className="text-sm text-gray-500">{method.description}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">{method.fee}</div>
              </button>
            ))}
          </Card>
        </div>

        {/* Кнопка продолжить */}
        <button
          className={`w-full p-4 rounded-lg text-white font-medium transition-colors ${
            amount && Number(amount) > 0 
              ? 'bg-blue-600 hover:bg-blue-500' 
              : 'bg-gray-300 cursor-not-allowed'
          }`}
          disabled={!amount || Number(amount) <= 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default WithdrawPage;
