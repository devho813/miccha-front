import React, { memo, useMemo } from 'react'
import Slick from 'react-slick'
import { SlickWrap, ContentHead, ContentTitle, AllView } from '../../styles/home_movie'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { reactSlickSettings } from '../../utils/react-slick'
import MovieItem from './MovieItem'
import { Movie } from '../../recoil/movie/atom'
import MovieShow from './MovieShow'

type Props = {
  theme: string
  movies: Movie[]
  inViewRef?: (node?: Element | null | undefined) => void
}

const MovieSlider: React.FC<Props> = ({ theme, movies, inViewRef }) => {
  const settings = useMemo(() => reactSlickSettings, [])
  const itemsList = movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)

  return (
    <li>
      <ContentHead>
        <ContentTitle>{theme}</ContentTitle>
        <AllView href="#">
          모두 보기
          <img src="/images/common/arr_right.svg" alt="모두 보기 버튼" />
        </AllView>
      </ContentHead>

      <ul>
        <SlickWrap ref={inViewRef}>
          <Slick {...settings}>{itemsList}</Slick>
          <MovieShow />
        </SlickWrap>
      </ul>
    </li>
  )
}

export default memo(MovieSlider)
