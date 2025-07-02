
import { useState } from "react";
import { ArrowLeft, Upload, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const SellPage = () => {
  const [couponCode, setCouponCode] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    brand: string;
    amount: number;
    expiryDate: string;
    sellPrice: number;
  } | null>(null);
  const { toast } = useToast();

  const handleValidation = async () => {
    if (!couponCode.trim()) {
      toast({
        title: "쿠폰 코드를 입력해주세요",
        variant: "destructive",
      });
      return;
    }

    setIsValidating(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock validation result
      const mockResult = {
        isValid: true,
        brand: "스타벅스",
        amount: 10000,
        expiryDate: "2024-12-31",
        sellPrice: 9000,
      };
      
      setValidationResult(mockResult);
      setIsValidating(false);
      
      toast({
        title: "쿠폰 검증 완료!",
        description: "유효한 쿠폰입니다.",
      });
    }, 2000);
  };

  const handleSell = () => {
    toast({
      title: "판매 완료!",
      description: "9,000원이 포인트로 적립되었습니다.",
    });
    
    // Reset form
    setCouponCode("");
    setValidationResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              쿠폰 판매하기
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Info Card */}
          <Card className="mb-8 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Upload className="w-5 h-5" />
                판매 절차 안내
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span>기프티콘 코드 입력</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span>유효성 자동 검증 (브랜드, 금액, 유효기간)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span>시세의 90% 가격 즉시 정산</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  💡 <strong>팁:</strong> 유효기간이 3개월 이상 남은 쿠폰이 높은 가격에 판매됩니다!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Coupon Input */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>기프티콘 정보 입력</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="coupon-code">쿠폰 코드</Label>
                <Input
                  id="coupon-code"
                  placeholder="기프티콘 번호를 입력하세요 (예: 1234-5678-9012)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="mt-2"
                />
              </div>
              
              <Button 
                onClick={handleValidation}
                disabled={isValidating}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                {isValidating ? "검증 중..." : "쿠폰 검증하기"}
              </Button>
            </CardContent>
          </Card>

          {/* Validation Result */}
          {validationResult && (
            <Card className="mb-6 border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  검증 결과
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label className="text-gray-600">브랜드</Label>
                    <p className="font-semibold">{validationResult.brand}</p>
                  </div>
                  <div>
                    <Label className="text-gray-600">액면가</Label>
                    <p className="font-semibold">{validationResult.amount.toLocaleString()}원</p>
                  </div>
                  <div>
                    <Label className="text-gray-600">유효기간</Label>
                    <p className="font-semibold">{validationResult.expiryDate}</p>
                  </div>
                  <div>
                    <Label className="text-gray-600">판매가 (90%)</Label>
                    <p className="font-semibold text-green-600">{validationResult.sellPrice.toLocaleString()}원</p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-green-800 mb-2">💰 정산 예정 금액</h4>
                  <p className="text-2xl font-bold text-green-600">{validationResult.sellPrice.toLocaleString()}원</p>
                  <p className="text-sm text-green-700 mt-1">포인트로 즉시 적립됩니다</p>
                </div>

                <Button 
                  onClick={handleSell}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                >
                  판매 확정하기
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Popular Brands */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">인기 판매 브랜드</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">스타벅스</Badge>
                <Badge variant="secondary">이디야</Badge>
                <Badge variant="secondary">GS25</Badge>
                <Badge variant="secondary">CU</Badge>
                <Badge variant="secondary">배달의민족</Badge>
                <Badge variant="secondary">요기요</Badge>
                <Badge variant="secondary">쿠팡이츠</Badge>
                <Badge variant="secondary">올리브영</Badge>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                위 브랜드들은 높은 수요로 빠른 판매가 가능합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SellPage;
