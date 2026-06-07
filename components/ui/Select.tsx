'use client'

import {
    Listbox,
    Transition,
} from '@headlessui/react'

import {
    Fragment,
} from 'react'

import {
    FiChevronDown,
    FiCheck,
} from 'react-icons/fi'

interface Option {

    value: string

    label: string
}

interface Props {

    value: string

    options: Option[]

    onChange: (
        value: string
    ) => void
}

export default function Select({
    value,
    options,
    onChange,
}: Props) {

    const selected =
        options.find(
            option =>
                option.value === value
        )

    return (

        <Listbox
            value={value}
            onChange={onChange}
        >

            <div className="relative">

                <Listbox.Button
                    className="
                        relative

                        w-full

                        rounded-xl

                        border border-white/10
                        bg-white/5

                        px-4 py-3

                        text-left
                        text-white

                        backdrop-blur-xl

                        transition-all

                        hover:border-white/20

                        focus:outline-none
                        focus:ring-2
                        focus:ring-(--secondary)
                    "
                >

                    <span>
                        {selected?.label}
                    </span>

                    <span
                        className="
                            absolute
                            inset-y-0
                            right-4

                            flex
                            items-center
                        "
                    >
                        <FiChevronDown />
                    </span>

                </Listbox.Button>

                <Transition
                    as={Fragment}
                    leave="
                        transition
                        ease-in
                        duration-100
                    "
                    leaveFrom="
                        opacity-100
                    "
                    leaveTo="
                        opacity-0
                    "
                >

                    <Listbox.Options
                        className="
                            absolute
                            z-50

                            mt-2
                            max-h-60
                            w-full

                            overflow-auto

                            rounded-2xl

                            border border-white/10

                            bg-[#0B1120]/95

                            p-2

                            backdrop-blur-2xl

                            shadow-xl

                            focus:outline-none
                        "
                    >

                        {options.map(
                            (
                                option
                            ) => (

                                <Listbox.Option
                                    key={
                                        option.value
                                    }
                                    value={
                                        option.value
                                    }
                                    className={({
                                        active,
                                    }) =>
                                        `
                                            relative

                                            flex
                                            cursor-pointer
                                            items-center
                                            justify-between

                                            rounded-xl

                                            px-4
                                            py-3

                                            transition-all

                                            ${active
                                            ? 'bg-white/10 text-white'
                                            : 'text-slate-300'
                                        }
                                        `
                                    }
                                >

                                    {({
                                        selected,
                                    }) => (

                                        <>
                                            <span>
                                                {
                                                    option.label
                                                }
                                            </span>

                                            {selected && (

                                                <FiCheck
                                                    className="
                                                        text-(--secondary)
                                                    "
                                                />

                                            )}
                                        </>

                                    )}

                                </Listbox.Option>

                            )
                        )}

                    </Listbox.Options>

                </Transition>

            </div>

        </Listbox>
    )
}