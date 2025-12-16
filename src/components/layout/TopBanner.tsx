import type { FC } from 'react'

import bannerYoutube from '../../assets/banners/Banner_Youtube.png'

export const TopBanner: FC = () => {
  return (
    <section className="w-full border-b border-black/5 bg-linear-to-b from-black/2 to-transparent">
      <div className="mx-auto max-w-full px-0 bg-black">
        <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio: '16 / 9' }}>
          <img
            src={bannerYoutube}
            alt="Samanda Records - Banner"
            className="w-full h-full object-contain"
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
