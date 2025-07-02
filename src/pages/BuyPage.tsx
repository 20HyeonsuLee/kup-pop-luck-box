
import { useState } from "react";
import { ArrowLeft, Gift, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const BuyPage = () => {
  const { toast } = useToast();

  const randomBoxes = [
    {
      id: 1,
      name: "💝 10,000원 랜덤박스",
      price: 9700,
      originalPrice: 10000,
      discount: 3,
      prizes: [
        { probability: 90, amount: 10000, label: "10,000원 쿠폰" },
        { probability: 10, amount: 12000, label: "12,000원 쿠폰 🎉" },
      ],
      expectedValue: 10200,
      brand: "다양한 브랜드",
      category: "일반",
    },
    {
      id: 2,
      name: "☕ 스타벅스 랜덤박스",
      price: 9500,
      originalPrice: 10000,
      discount: 5,
      prizes: [
        { probability: 80, amount: 10000, label: "아메리카노 쿠폰" },
        { probability: 15, amount: 12000, label: "라떼 쿠폰" },
        { probability: 5, amount: 15000, label: "프라푸치노 쿠폰 🎉" },
      ],
      expectedValue: 10450,
      brand: "스타벅스",
      category: "브랜드",
    },
    {
      id: 3,
      name: "🍕 배달음식 랜덤박스",
      price: 19400,
      originalPrice: 20000,
      discount: 3,
      prizes: [
        { probability: 85, amount: 20000, label: "20,000원 쿠폰" },
        { probability: 15, amount: 25000, label: "25,000원 쿠폰 🎉" },
      ],
      expectedValue: 20750,
      brand: "배달의민족/요기요",
      category: "음식",
    },
    {
      id: 4,
      name: "🛒 편의점 랜덤박스",
      price: 4850,
      originalPrice: 5000,
      discount: 3,
      prizes: [
        { probability: 70, amount: 5000, label: "5,000원 쿠폰" },
        { probability: 25, amount: 6000, label: "6,000원 쿠폰" },
        { probability: 5, amount: 10000, label: "10,000원 쿠폰 🎉" },
      ],
      expectedValue: 5450,
      brand: "GS25/CU/세븐일레븐",
      category: "편의점",
    },
  ];

  const handlePurchase = (box: any) => {
    toast({
      title: `${box.name} 구매 완료!`,
      description: "박스를 열어보세요!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                홈으로
              </Button>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              랜덤박스 구매하기
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Info Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Gift className="w-5 h-5" />
                랜덤박스 구매 안내
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">즉시 확인</h4>
                  <p className="text-sm text-gray-600">구매 후 바로 박스를 열어 결과를 확인하세요</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">본전 보장</h4>
                  <p className="text-sm text-gray-600">모든 박스는 최소 본전 이상의 가치를 보장합니다</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Gift className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">투명한 확률</h4>
                  <p className="text-sm text-gray-600">모든 당첨 확률과 기대값을 투명하게 공개</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Random Boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {randomBoxes.map((box) => (
            <Card key={box.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2">
              <CardHeader className={`${
                box.category === "브랜드" ? "bg-gradient-to-r from-green-500 to-emerald-500" :
                box.category === "음식" ? "bg-gradient-to-r from-orange-500 to-red-500" :
                box.category === "편의점" ? "bg-gradient-to-r from-blue-500 to-cyan-500" :
                "bg-gradient-to-r from-purple-500 to-pink-500"
              } text-white`}>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{box.name}</CardTitle>
                    <p className="text-white/90 text-sm">{box.brand}</p>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {box.discount}% 할인
                  </Badge>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-2xl font-bold">{box.price.toLocaleString()}원</span>
                  <span className="text-white/70 line-through text-sm">{box.originalPrice.toLocaleString()}원</span>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                {/* Prizes */}
                <div className="space-y-3 mb-4">
                  <h4 className="font-semibold text-gray-800">🎁 당첨 구성</h4>
                  {box.prizes.map((prize, index) => (
                    <div key={index} className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">{prize.probability}% 확률</span>
                      <Badge variant={prize.label.includes("🎉") ? "default" : "secondary"}>
                        {prize.label}
                      </Badge>
                    </div>
                  ))}
                </div>

                {/* Expected Value */}
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-800 font-medium">기대값</span>
                    <span className="text-blue-800 font-bold text-lg">
                      {box.expectedValue.toLocaleString()}원
                    </span>
                  </div>
                  <p className="text-xs text-blue-600 mt-1">
                    평균적으로 이 금액만큼의 가치를 얻을 수 있어요
                  </p>
                </div>

                <Button 
                  onClick={() => handlePurchase(box)}
                  className={`w-full ${
                    box.category === "브랜드" ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600" :
                    box.category === "음식" ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600" :
                    box.category === "편의점" ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600" :
                    "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  }`}
                >
                  구매하기
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="border-yellow-200">
            <CardHeader className="bg-yellow-50">
              <CardTitle className="text-yellow-800">💡 왜 랜덤박스를 선택해야 할까요?</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">✅ 확실한 이득</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 모든 박스는 구매가보다 높은 가치 보장</li>
                    <li>• 최소 본전, 운 좋으면 더 큰 이득</li>
                    <li>• 투명한 확률 공개로 신뢰할 수 있는 구매</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-600">🎯 스마트한 소비</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 어차피 쓸 쿠폰, 조금이라도 할인받기</li>
                    <li>• 다양한 브랜드 쿠폰을 한 번에 만나기</li>
                    <li>• 확률의 재미까지 덤으로 얻기</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
