import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { QrCode, CreditCard, Banknote, Barcode } from "lucide-react";

export default function SchedulingPaymentType() {
    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                    Tipo de pagamento
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    <Button
                        className='w-full whitespace-normal break-words h-auto py-2 px-3 text-sm'>
                        <QrCode />
                        PIX
                    </Button>
                    <Button
                        className='w-full whitespace-normal break-words h-auto py-2 px-3 text-sm'>
                        <Barcode />
                        DÉBITO
                    </Button>
                    <Button
                        className='w-full whitespace-normal break-words h-auto py-2 px-3 text-sm'>
                        <CreditCard />
                        CRÉDITO
                    </Button>
                    <Button
                        className='w-full whitespace-normal break-words h-auto py-2 px-3 text-sm'>
                        <Banknote />
                        DINHEIRO
                    </Button>
                </div>
            </div>
        </div>
    )
}