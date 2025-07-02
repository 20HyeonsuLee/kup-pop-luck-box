
import { Gift, Zap, TrendingUp, Shield, ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  쿠뽑
                </h1>
                <p className="text-xs text-gray-500">KupPop</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link to="/sell">
                <Button variant="outline" size="sm">쿠폰 판매</Button>
              </Link>
              <Link to="/buy">
                <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  랜덤박스 구매
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-100">
            🎁 확률형 거래 플랫폼
          </Badge>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent">
            안 쓰는 기프티콘,<br />지금 팔고 🎲 운 좋으면 더 이득
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            사용하지 않을 기프티콘을 <strong>즉시 90% 가격에 판매</strong>하고,<br />
            다른 사용자는 <strong>확률형 랜덤박스로 구매</strong>하는 순환형 쿠폰 마켓
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/sell">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8">
                <ArrowUp className="w-5 h-5 mr-2" />
                쿠폰 판매하기
              </Button>
            </Link>
            <Link to="/buy">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                <ArrowDown className="w-5 h-5 mr-2" />
                랜덤박스 구매하기
              </Button>
            </Link>
          </div>
        </div>

        {/* Example Box */}
        <div className="max-w-md mx-auto mb-16">
          <Card className="border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
              <CardTitle className="text-xl">💝 10,000원 랜덤박스</CardTitle>
              <p className="text-orange-100">구매가: 9,700원 (3% 할인)</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>90% 확률</span>
                  <Badge variant="secondary">10,000원 쿠폰</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>10% 확률</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">12,000원 쿠폰 🎉</Badge>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 text-center">
                  <strong>기대값: 10,200원</strong> (최소 본전 보장!)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">왜 쿠뽑인가요?</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow border-orange-100">
            <CardHeader>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <CardTitle className="text-lg">즉시 판매</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                복잡한 중고거래 없이<br />
                원클릭으로 즉시 90% 현금화
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-red-100">
            <CardHeader>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-lg">확률의 재미</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                본전은 보장하면서<br />
                운 좋으면 더 큰 이득까지
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-green-100">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-lg">투명한 확률</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                모든 랜덤박스의 구성과<br />
                확률을 투명하게 공개
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-blue-100">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-lg">안전한 거래</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                자동 유효성 검증으로<br />
                믿을 수 있는 안전한 거래
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* User Personas */}
      <section className="bg-white/50 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">이런 분들이 사용해요</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Seller Persona */}
            <Card className="border-2 border-blue-200 hover:shadow-lg transition-all">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl">
                    🙋‍♂️
                  </div>
                  <div>
                    <CardTitle className="text-blue-800">박준호 (23세, 대학생)</CardTitle>
                    <p className="text-blue-600">판매자</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-blue-800 font-medium">
                    "생일선물로 받은 스타벅스 쿠폰들..."
                  </p>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• 커피는 잘 안 마시고, 편의점도 자주 안 가요</li>
                  <li>• 유효기간은 넉넉하지만 잘 안 쓸 것 같아요</li>
                  <li>• <strong>"9,000원이라도 받아서 치킨 사 먹는 게 낫지!"</strong></li>
                </ul>
              </CardContent>
            </Card>

            {/* Buyer Persona */}
            <Card className="border-2 border-pink-200 hover:shadow-lg transition-all">
              <CardHeader className="bg-pink-50">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl">
                    🙋‍♀️
                  </div>
                  <div>
                    <CardTitle className="text-pink-800">이지혜 (26세, 직장인)</CardTitle>
                    <p className="text-pink-600">구매자</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <p className="text-pink-800 font-medium">
                    "3%만 싸도 아낀 느낌이 좋아요!"
                  </p>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• 평소 배달앱, 카페 쿠폰을 자주 구매해요</li>
                  <li>• 조금이라도 할인받으면 기분이 좋아져요</li>
                  <li>• <strong>"가끔은 득템도 하고, 일석이조!"</strong></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">지금 시작해보세요!</h3>
          <p className="text-xl mb-8 text-orange-100">
            안 쓰는 쿠폰은 팔고, 필요한 쿠폰은 저렴하게 사고
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sell">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8">
                쿠폰 판매 시작하기
              </Button>
            </Link>
            <Link to="/buy">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 border-white text-white hover:bg-white hover:text-orange-600">
                랜덤박스 구경하기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Gift className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">쿠뽑 (KupPop)</span>
          </div>
          <p className="text-gray-400">
            기프티콘 즉시 판매 + 랜덤박스 구매를 결합한 확률형 거래 플랫폼
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
