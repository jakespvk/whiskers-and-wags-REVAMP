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
    const autoplay = emblaApi?.plugins()?.autoplay
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
            <div className="embla__slide"><img src="/Hashbrown.jpeg" alt="Hashbrown" className="cover" /></div>
            <div className="embla__slide"><img src="/jerry2.png" alt="Jerry2" /></div>
            <div className="embla__slide"><img src="/Stray.jpg" alt="Stray" /></div>
            <div className="embla__slide"><img src="/jerry1.png" alt="Jerry" /></div>
            <div className="embla__slide"><img src="/Dom2.jpg" alt="Dom" /></div>
            <div className="embla__slide"><img src="/Dwayne.jpg" alt="Dwayne" /></div>
            <div className="embla__slide"><img src="/Shakira1.jpg" alt="Shakira" /></div>
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

