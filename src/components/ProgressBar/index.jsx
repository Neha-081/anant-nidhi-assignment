import { CheckIcon, MinusCircleIcon, TrendingUpIcon } from '@heroicons/react/solid'

// Define a timeline array with different events
const timeline = [
  {
    id: 1,
    content: 'Application Submitted',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 2,
    content: 'In Progress',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: TrendingUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Approved',
    href: '#',
    date: '-',
    datetime: '',
    icon: MinusCircleIcon,
    iconBackground: 'bg-gray-300',
  },
]

// Define a utility function for generating CSS class names
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

  // Define a functional component called ProgressBar
export default function ProgessBar() {
  return (
    <div className="flow-root mt-5">
      <ul>
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
