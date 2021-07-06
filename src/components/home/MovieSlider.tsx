import React, { memo } from 'react'
import { ContentHead, ContentTitle, AllView, Slider } from '../../styles/home_movie'
import MovieItem from './MovieItem'
import { Movie } from '../../recoil/movie/atom'
import MovieShow from './MovieShow'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/Io'

type Props = {
  theme: string
  movies: Movie[]
  inViewRef?: (node?: Element | null | undefined) => void
}

const MovieSlider: React.FC<Props> = ({ theme, movies }) => {
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

      <Slider>
        {itemsList}

        <div className="sliderBtn">
          <button className="pre">
            <IoIosArrowBack style={{ color: '#fff', opacity: '80%' }} />
          </button>
          <button className="next">
            <IoIosArrowForward style={{ color: '#fff', opacity: '80%' }} />
          </button>
        </div>
      </Slider>

      <MovieShow />
    </li>
  )
}

export default memo(MovieSlider)
