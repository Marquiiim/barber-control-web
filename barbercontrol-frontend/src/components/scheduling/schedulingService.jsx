import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function SchedulingService() {

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                    Serviços
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {/*IRÁ SER MAPEADO OS SERVIÇOS DO BANCO DE DADOS EM LISTAS*/}
                    <Button
                        className='w-full whitespace-normal break-words h-auto py-2 px-3 text-sm'>
                        CORTE
                    </Button>
                </div>
            </div>
        </div>
    )
}