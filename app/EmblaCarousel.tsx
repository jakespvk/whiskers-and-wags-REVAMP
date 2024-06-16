import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay: any = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className="embla">
      <div className="embla__viewport max-w-screen-lg w-4/5 mx-auto rounded-box" ref={emblaRef}>
        <div className="embla__container">
            <div className="embla__slide hover:opacity-45"><a href="https://www.google.com"><img src="/Hashbrown.jpeg" alt="Hashbrown" className="w-full h-full cover" /></a></div>
            <div className="embla__slide hover:opacity-45"><img src="/jerry2.png" alt="Jerry2" className="w-full h-full cover" /></div>
            <div className="embla__slide hover:opacity-45"><img src="/Stray.jpg" alt="Stray" className="w-full h-full cover" /></div>
            <div className="embla__slide hover:opacity-45"><img src="/jerry1.png" alt="Jerry" className="w-full h-full cover" /></div>
            <div className="embla__slide hover:opacity-45"><img src="/Dom2.jpg" alt="Dom" className="w-full h-full cover" /></div>
            <div className="embla__slide hover:opacity-45"><img src="/Dwayne.jpg" alt="Dwayne" className="w-full h-full cover" /></div>
            <div className="embla__slide hover:opacity-45"><img src="/Shakira1.jpg" alt="Shakira" className="w-full h-full cover" /></div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel

