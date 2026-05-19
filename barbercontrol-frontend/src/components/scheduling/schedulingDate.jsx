import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import api from "@/services/apiInstance"

export default function SchedulingDate() {
    const [optionsFound, setOptionsFound] = useState({
        dates: null,
        hours: null
    })

    const sysOptions = async () => {
        try {
            const response = await Promise.allSettled([
                api.get('/appointments/hours')
            ])
            console.log(response[0].value)
            setOptionsFound(prev => ({
                ...prev,
                hours: response[0].value
            }))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        sysOptions()
    }, [])

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
                    {optionsFound.hours.map(hour => (
                        <Button
                            key={hour.id}>
                            {hour.availables}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}