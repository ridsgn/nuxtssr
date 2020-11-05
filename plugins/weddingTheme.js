import Indonesian from 'vue-tailwind/dist/l10n/id';

export default {
    TDatepicker: {
        locale: Indonesian,
    },
    TButton: {
        fixedClasses: 'focus:outline-none focus:shadow-outline flex items-center justify-center transition ease-in-out duration-150',
        classes: 'text-white bg-teal-500 border-0 py-2 px-5 focus:outline-none hover:bg-teal-600 rounded-lg',
        variants: {
            disabled: 'text-white bg-teal-500 border-0 py-2 px-5 focus:outline-none hover:bg-teal-600 rounded-lg opacity-50 cursor-not-allowed',
            cta: 'text-white bg-orange-500 border-0 py-2 px-5 focus:outline-none hover:bg-orange-600 rounded-lg',
            disabledCta: 'text-white bg-orange-500 border-0 py-2 px-5 focus:outline-none hover:bg-orange-600 rounded-lg opacity-50 cursor-not-allowed',
            outline: 'text-teal-500 bg-transparent border-2 py-2 px-5 focus:outline-none hover:text-teal-600 hover:border-teal-600 rounded-lg',
        }
    },
    TModal: {
        fixedClasses: {
            overlay: 'z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50',
            wrapper: 'z-50 relative mx-auto my-0 max-w-lg mt-12',
            modal: 'bg-white shadow overflow-hidden relative',
            body: 'p-4',
            header: 'p-4  text-sm font-semibold uppercase text-gray-700',
            footer: 'p-4 text-sm font-semibold uppercase text-gray-700',
            close: 'absolute right-0 top-0 m-3 text-gray-700 hover:text-gray-600',
            closeIcon: 'h-5 w-5 fill-current'
        },
        classes: {
            overlay: 'bg-black ',
            wrapper: '',
            modal: '',
            body: 'p-4',
            header: 'text-gray-700 border-b',
            footer: 'border-t ',
            close: 'text-gray-700 hover:text-gray-600',
            closeIcon: ''
        },
        variants: {
            danger: {
                overlay: 'bg-red-500',
                header: 'border-red-100 text-red-700 border-b',
                footer: 'border-red-100 bg-red-100 border-t  ',
                close: 'text-red-700 hover:text-red-600'
            },
            clean: {
                modal: 'rounded shadow-lg',
                footer: 'bg-gray-100 ',
                body: 'p-4 text-sm text-gray-700',
                close: 'bg-blue-100 p-1 flex items-center justify-center leading-normal rounded-full text-blue-80 hover:bg-blue-200'
            }
        }
    },
    TAlert: {
        fixedClasses: {
            wrapper: 'rounded p-4 flex text-sm border-l-4',
            body: 'flex-grow',
            close: 'ml-4 rounded',
            closeIcon: 'h-5 w-5 fill-current'
        },
        classes: {
            wrapper: 'bg-blue-100 border-blue-500',
            body: 'text-blue-700',
            close: 'text-blue-700 hover:text-blue-500 hover:bg-blue-200',
            closeIcon: 'h-5 w-5 fill-current'
        },
        variants: {
            danger: {
                wrapper: 'bg-red-100 border-red-500',
                body: 'text-red-700',
                close: 'text-red-700 hover:text-red-500 hover:bg-red-200'
            },
            success: {
                wrapper: 'bg-green-100 border-green-500',
                body: 'text-green-700',
                close: 'text-green-700  hover:text-green-500 hover:bg-green-200'
            }
        }
    },
    TTag: {
        classes: 'px-2 inline-flex font-body text-xs leading-5 tracking-wide truncate ellipsis font-semibold rounded-full bg-teal-100 text-teal-800',
    },
    TCheckbox: {
        fixedClasses: 'form-checkbox transition duration-150 ease-in-out',
        classes: '',
        variants: {
            error: 'text-red-500 ',
            success: 'text-teal-500 ',
            orange: 'text-orange-500 '
        }
    }
}
