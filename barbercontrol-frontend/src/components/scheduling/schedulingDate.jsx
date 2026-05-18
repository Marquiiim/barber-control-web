import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function SchedulingDate() {
    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                    Data
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {/*IRÁ SER MAPEADO AS DATAS DO BANCO DE DADOS EM LISTAS*/}
                    <Button
                        className='w-full'>
                        01/02
                    </Button>
                </div>
            </div>

            <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                    Horário
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {/*IRÁ SER MAPEADO OS HORÁRIOS DO BANCO DE DADOS EM LISTAS*/}
                    <Button>
                        01:02
                    </Button>
                </div>
            </div>
        </div>
    );
}