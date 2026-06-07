'use client'

import Button from
    '@/components/ui/Button'

import {
    HistoryDetail,
} from '@/types/history'

import {
    exportHistoryPdf,
} from '@/lib/pdf/exportHistoryPdf'

import {
    showSuccess,
} from '@/lib/swal'

interface Props {

    history: HistoryDetail
}

export default function ExportHistoryButton({
    history,
}: Props) {

    const handleExport =
        async () => {

            exportHistoryPdf(
                history
            )

            await showSuccess(
                'Export Complete',
                'Your PDF report has been downloaded.'
            )
        }

    return (

        <Button
            onClick={
                handleExport
            }
        >
            Export PDF
        </Button>

    )
}