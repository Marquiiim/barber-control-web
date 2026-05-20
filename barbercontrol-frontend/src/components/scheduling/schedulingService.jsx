import { useEffect, useState } from "react"
import api from "@/services/apiInstance"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function SchedulingService() {
    const [optionsFound, setOptionsFound] = useState([])

    const getServices = async () => {
        try {
            const response = await api.get('/appointments/services')
            setOptionsFound(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getServices()
    }, [])

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                    Serviços
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {/*IRÁ SER MAPEADO OS SERVIÇOS DO BANCO DE DADOS EM LISTAS*/}
                    {optionsFound.map(service => (
                        <Button
                            key={service.id}
                            className='w-full whitespace-normal break-words h-auto py-2 px-3 text-sm'>
                            {service.availables}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}