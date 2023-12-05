import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'

export function GuidesOther({ id, title, level, isShow, elements }) {
  return (
    <div className="xl:max-w-none">
      <Heading level={level} id={id}>
        {title}
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-4 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {isShow &&
          elements.map((guide) => (
            <div key={guide.href}>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {guide.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {guide.description}
              </p>
              <p className="mt-4">
                {guide.href !== '' && (
                  <Button href={guide.href} variant="text" arrow="right">
                    Read more
                  </Button>
                )}
              </p>
            </div>
          ))}
      </div>
    </div>
  )
}
