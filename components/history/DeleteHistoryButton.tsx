'use client'

import {
    useRouter,
} from 'next/navigation'

import Button from '@/components/ui/Button'

import {
    deleteHistory,
} from '@/lib/api/history'

import {
    showConfirm,
    showSuccess,
    showError,
} from '@/lib/swal'

interface Props {

    historyId: number
}

export default function DeleteHistoryButton({
    historyId,
}: Props) {

    const router =
        useRouter()

    const handleDelete =
        async () => {

            const result =
                await showConfirm(
                    'Delete History',
                    'This action cannot be undone.'
                )

            if (
                !result.isConfirmed
            ) {
                return
            }

            try {

                await deleteHistory(
                    historyId
                )

                await showSuccess(
                    'Deleted',
                    'History removed successfully.'
                )

                router.push(
                    '/history'
                )

            } catch {

                await showError(
                    'Failed',
                    'Unable to delete history.'
                )
            }
        }

    return (
        <Button
            variant="secondary"
            onClick={
                handleDelete
            }
        >
            Delete Report
        </Button>
    )
}