import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { QrCode, CreditCard, Banknote, Barcode } from "lucide-react";
import { useState } from "react";

export default function SchedulingPaymentType({ getSelectedPayment }) {
    const [typePayment, setTypePayment] = useState('')

    const setPayment = (type) => {
        if (type === typePayment) return setTypePayment('')
        setTypePayment(type)
        getSelectedPayment(type)
    }


    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                    Tipo de pagamento
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    <Button
                        onClick={(e) => setPayment('pix')}
                        className='w-full whitespace-normal break-words h-auto py-2 px-3 text-sm'
                        value='pix'
                        variant={typePayment === 'pix' ? 'default' : 'outline'}>
                        <QrCode />
                        PIX
                    </Button>
                    <Button
                        onClick={(e) => setPayment('debit')}
                        className='w-full whitespace-normal break-words h-auto py-2 px-3 text-sm'
                        variant={typePayment === 'debit' ? 'default' : 'outline'}>
                        <Barcode />
                        DÉBITO
                    </Button>
                    <Button
                        onClick={(e) => setPayment('credit')}
                        className='w-full whitespace-normal break-words h-auto py-2 px-3 text-sm'
                        variant={typePayment === 'credit' ? 'default' : 'outline'}>
                        <CreditCard />
                        CRÉDITO
                    </Button>
                    <Button
                        onClick={(e) => setPayment('money')}
                        className='w-full whitespace-normal break-words h-auto py-2 px-3 text-sm'
                        variant={typePayment === 'money' ? 'default' : 'outline'}>
                        <Banknote />
                        DINHEIRO
                    </Button>
                </div>
            </div>
        </div>
    )
}