import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { ChevronLeft, Copy } from 'lucide-react';

const CardDetails = () => {
  const [copied, setCopied] = useState(false);

  const cardNumber = "4532 9856 2341 7890";
  const cvv = "123";
  const expiryDate = "10/25";
  const cardHolder = "JOHN SMITH";

  const handleCopyNumber = async () => {
    await navigator.clipboard.writeText(cardNumber.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Верхняя панель */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b">
        <div className="flex items-center space-x-3">
          <button className="hover:bg-gray-100 p-1 rounded-full">
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <h2 className="text-lg font-semibold">Digital</h2>
        </div>
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm">
          JS
        </div>
      </div>

      {/* Контейнер с центрированием */}
      <div className="p-4 flex justify-center items-center min-h-[calc(100vh-64px)]">
        {/* Карта с фиксированными размерами */}
        <div className="w-[340px]"> {/* 85.6mm ≈ 340px */}
          <div className="aspect-[1.586/1] w-full">
            <Card className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 flex flex-col justify-between relative overflow-hidden">
              {/* Фоновый паттерн */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-400 rounded-full translate-x-20 -translate-y-20" />
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-green-400 rounded-full translate-x-1/3 translate-y-1/3" />
                <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-purple-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
              </div>
              
              {/* Контент карты */}
              <div className="relative">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-8 bg-yellow-200/30 rounded-lg" />
                  <div className="text-right">
                    <span className="text-lg text-white font-medium block">VISA</span>
                    <div className="text-sm text-white/60 mt-2">CVV: {cvv}</div>
                  </div>
                </div>
              </div>

              <div className="relative space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="font-mono text-xl tracking-wider">
                    {cardNumber}
                  </div>
                  <button 
                    onClick={handleCopyNumber}
                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <Copy className="h-4 w-4" />
                    {copied && (
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/75 text-white text-xs py-1 px-2 rounded">
                        Copied
                      </div>
                    )}
                  </button>
                </div>

                <div className="flex justify-between">
                  <div>
                    <div className="text-xs text-white/60 mb-1">Card Holder</div>
                    <div className="font-medium">{cardHolder}</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/60 mb-1">Expires</div>
                    <div className="font-medium">{expiryDate}</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
