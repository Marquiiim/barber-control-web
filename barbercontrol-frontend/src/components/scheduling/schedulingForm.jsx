import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { useState } from "react";

import { User, Phone, Calendar } from "lucide-react";

import SchedulingService from "./schedulingService";
import SchedulingDate from "./schedulingDate";
import SchedulingPaymentType from "./schedulingPaymenteType";

export default function SchedulingForm() {

    const [schedulingData, setSchedulingData] = useState({
        name: '',
        phoneNumber: '',
        service: '',
        date: '',
        time: '',
        typePayment: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('ENVIADO')
    }


    return (
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-8">
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-semibold text-foreground">Dados Pessoais</h3>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                            Nome completo
                        </Label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="name"
                                placeholder="Digite seu nome completo"
                                type="text"
                                required
                                className="pl-9 bg-background border-input focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">
                            Número de telefone
                        </Label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="phone"
                                placeholder="99 99999-9999"
                                type="tel"
                                required
                                className="pl-9 bg-background border-input focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Separator className="bg-border/50" />

            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-semibold text-foreground">Agendamento</h3>
                </div>

                <div className="grid gap-4">

                    <SchedulingService />

                    {schedulingData.service !== '' && (
                        <SchedulingDate />
                    )}

                    {schedulingData.date !== '' &&
                        schedulingData.time !== '' && (
                            <SchedulingPaymentType />
                        )}

                </div>
            </div>

            <Separator className="bg-border/50" />

            <div className="pt-2">
                <Button
                    type="submit"
                    className="w-full h-11 text-base font-medium shadow-sm hover:shadow-md transition-all duration-200"
                >
                    Realizar agendamento
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                    Ao confirmar, você concorda com nossos termos de serviço
                </p>
            </div>
        </form>
    )
}