import Indonesian from 'vue-tailwind/dist/l10n/id';

export default {
    TDropdown: {
        fixedClasses: {
            button: 'flex items-center text-white block px-4 py-2 transition duration-100 ease-in-out border border-transparent rounded shadow-sm focus:border-hw-teal focus:ring-2 focus:ring-hw-teal focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
            wrapper: 'inline-flex flex-col',
            dropdownWrapper: 'relative z-10',
            dropdown: 'origin-top-left absolute right-0 w-56 rounded shadow mt-1',
            enterClass: '',
            enterActiveClass: 'transition ease-out duration-100 transform opacity-0 scale-95',
            enterToClass: 'transform opacity-100 scale-100',
            leaveClass: 'transition ease-in transform opacity-100 scale-100',
            leaveActiveClass: '',
            leaveToClass: 'transform opacity-0 scale-95 duration-75'
        },
        classes: {
            button: 'bg-gray-200 hover:bg-gray-300',
            dropdown: 'bg-white'
        },
    },
    TCard: {
        fixedClasses: {
            wrapper: 'border rounded shadow-sm ',
            body: 'px-3 py-8 text-center font-bold',
            header: 'border-b p-3 rounded-t bg-gray-400 font-semibold',
            footer: 'border-t p-3 rounded-b'
        },
        classes: {
            wrapper: 'bg-white border-gray-100',
            body: '',
            header: 'border-gray-100',
            footer: 'border-gray-100'
        },
    },
    TPagination: {
        classes: {
            wrapper: 'table border-collapse text-center bg-white mx-auto mt-2',
            element: 'w-8 h-8 border table-cell',
            disabledElement: 'w-8 h-8 border table-cell',
            ellipsisElement: 'w-8 h-8 border table-cell',
            activeButton: 'bg-gray-300 w-full h-full',
            disabledButton: 'opacity-25 w-full h-full cursor-not-allowed',
            button: 'hover:bg-gray-200 w-full h-full',
            ellipsis: ''
        },
        variants: {
            rounded: {
                wrapper: 'flex',
                element: 'w-8 h-8 mx-1',
                disabledElement: 'w-8 h-8 mx-1',
                ellipsisElement: 'w-8 h-8 mx-1',
                activeButton: 'bg-blue-500 w-full h-full text-white rounded-full ',
                disabledButton: 'opacity-25 w-full h-full cursor-not-allowed rounded-full',
                button: 'hover:bg-blue-100 w-full h-full text-blue-500 rounded-full ',
                ellipsis: 'text-gray-500'
            }
        }
    },
    TTable: {
        classes: {
            table: 'shadow min-w-full divide-y divide-gray-200',
            tbody: 'bg-white divide-y divide-gray-200',
            td: 'px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700',
            theadTh: 'px-6 py-3 border-b border-gray-200 bg-gray-300 text-center text-xs leading-4 text-gray-700 uppercase tracking-wider'
        },
        variants: {
            thin: {
                td: 'p-1 whitespace-no-wrap text-sm leading-4 text-gray-700',
                theadTh: 'p-1 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider'
            }
        }
    },
    TDatepicker: {
        locale: Indonesian,
        fixedClasses: {
            navigator: 'flex',
            navigatorViewButton: 'flex items-center',
            navigatorViewButtonIcon: 'flex-shrink-0 h-5 w-5',
            navigatorViewButtonBackIcon: 'flex-shrink-0 h-5 w-5',
            navigatorLabel: 'flex items-center py-1',
            navigatorPrevButtonIcon: 'h-6 w-6 inline-flex',
            navigatorNextButtonIcon: 'h-6 w-6 inline-flex',

            inputWrapper: 'relative',
            viewGroup: 'inline-flex',
            view: 'w-64',
            calendarDaysWrapper: 'grid grid-cols-7',
            calendarHeaderWrapper: 'grid grid-cols-7',
            monthWrapper: 'grid grid-cols-4',
            yearWrapper: 'grid grid-cols-4',

            clearButton: 'flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6',
            clearButtonIcon: 'fill-current h-3 w-3',
        },
        classes: {
            // Dropdown related classes
            wrapper: 'inline-flex flex-col',
            dropdownWrapper: 'relative z-10',
            dropdown: 'origin-top-left absolute rounded-md shadow-lg',
            enterClass: '',
            enterActiveClass: 'transition ease-out duration-100 transform opacity-0 scale-95',
            enterToClass: 'transform opacity-100 scale-100',
            leaveClass: 'transition ease-in transform opacity-100 scale-100',
            leaveActiveClass: '',
            leaveToClass: 'transform opacity-0 scale-95 duration-75',

            // Wrapper for inline calendar
            inlineWrapper: '',

            // Text input related classes
            inputWrapper: '',
            input: 'form-input w-full',
            clearButton: 'hover:bg-gray-200 text-gray-500 rounded',
            clearButtonIcon: '',

            // Picker views
            viewGroup: 'bg-white border',
            view: '',

            // Navigator
            navigator: 'pt-2 px-2',
            navigatorViewButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer rounded-full px-2 py-1 -ml-1 hover:bg-gray-200',
            navigatorViewButtonIcon: 'fill-current text-gray-500',
            navigatorViewButtonBackIcon: 'fill-current text-gray-500',
            navigatorViewButtonMonth: 'text-gray-700 font-semibold',
            navigatorViewButtonYear: 'text-gray-600 ml-1',
            navigatorViewButtonYearRange: 'text-gray-600 ml-1',
            navigatorLabel: 'py-1',
            navigatorLabelMonth: 'text-gray-700 font-semibold',
            navigatorLabelYear: 'text-gray-600 ml-1',
            navigatorPrevButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 rounded-full p-1 ml-2 ml-auto disabled:opacity-25 disabled:cursor-not-allowed',
            navigatorNextButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 rounded-full p-1 -mr-1 disabled:opacity-25 disabled:cursor-not-allowed',
            navigatorPrevButtonIcon: 'text-gray-500',
            navigatorNextButtonIcon: 'text-gray-500',

            // Calendar View
            calendarWrapper: 'p-2',
            calendarHeaderWrapper: '',
            calendarHeaderWeekDay: 'uppercase text-xs text-gray-600 w-8 h-8 flex items-center justify-center',
            calendarDaysWrapper: '',
            calendarDaysDayWrapper: 'w-full h-8 flex flex-shrink-0 items-center',

            // Day item
            otherMonthDay: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 text-gray-400 disabled:opacity-25 disabled:cursor-not-allowed',
            emptyDay: '',
            inRangeFirstDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-l-full',
            inRangeLastDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-r-full',
            inRangeDay: 'text-sm bg-blue-200 w-full h-8 disabled:opacity-25 disabled:cursor-not-allowed',
            selectedDay: 'text-sm rounded-full w-8 h-8 mx-auto bg-blue-500 text-white disabled:opacity-25 disabled:cursor-not-allowed',
            activeDay: 'text-sm rounded-full bg-blue-100 w-8 h-8 mx-auto disabled:opacity-25 disabled:cursor-not-allowed',
            highlightedDay: 'text-sm rounded-full bg-blue-200 w-8 h-8 mx-auto disabled:opacity-25 disabled:cursor-not-allowed',
            day: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-25 disabled:cursor-not-allowed',
            today: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-25 disabled:cursor-not-allowed border border-blue-500',

            // Months View
            monthWrapper: 'p-2',
            selectedMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
            activeMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-100',
            month: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',

            // Years View
            yearWrapper: 'p-2',
            year: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',
            selectedYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
            activeYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-100',
        }
    },
    TButton: {
        fixedClasses: 'focus:outline-none focus:shadow-outline flex items-center justify-center transition ease-in-out duration-150',
        classes: 'text-white bg-teal-500 border-0 py-2 px-5 focus:outline-none hover:bg-teal-600 rounded-lg',
        variants: {
            disabled: 'text-white bg-teal-500 border-0 py-2 px-5 focus:outline-none rounded-lg opacity-50 cursor-not-allowed',
            cta: 'text-white bg-orange-500 border-0 py-2 px-5 focus:outline-none hover:bg-orange-600 rounded-lg',
            disabledCta: 'text-white bg-orange-500 border-0 py-2 px-5 focus:outline-none rounded-lg opacity-50 cursor-not-allowed',
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
            },
            'clean-full': {
                modal: 'rounded shadow-lg',
                wrapper: 'z-50 relative mx-auto my-0 max-w-6xl mt-12',
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
    },
}
