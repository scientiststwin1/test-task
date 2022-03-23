import React, { useState } from 'react'
import GridIcon from '../../components/atoms/icons/gridIcon';
import ListIcon from '../../components/atoms/icons/listIcon';
import PageTitle from '../../components/organisms/pageTitle';
import WorkSamples from '../../components/organisms/workSamples';
import HeadLine3 from '../../components/atoms/headLine3';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';

const Work = () => {

  const allCategories = ["all", "print", "photography", "web", "applications"]

  const [layout, setLayout] = useState('grid')
  const [category, setCategory] = useState("all")

  const setLayoutToGrid = () => setLayout('grid')

  const setLayoutToList = () => setLayout('list')

  const gridIconStyle = classnames(
    'w-6 fill-gray-500',
    { 'fill-main-green': layout === 'grid' }
  )

  const listIconStyle = classnames(
    'w-6 fill-gray-500',
    { 'fill-main-green': layout === 'list' }
  )

  const isSelectedStyle = a => classnames("cursor-pointer font-medium", { "text-main-green": a === category })

  const categoieElement = allCategories.map((category, index) => {
    return (
      <>
        <div onClick={setCategory.bind(this, category)} className={isSelectedStyle(category)}>
          {category.toUpperCase()}
        </div>
        {allCategories.length - 1 !== index && <span> / </span>}
      </>
    )

  })

  return (

    <div className='mb-6 space-y-6' >
      <Helmet>
        <title>Work</title>
        <meta name="description" content="sample work of Build studio company" />
      </Helmet>

      <PageTitle title="CHECK OUT WHAT I CAN DO" />
      <div className='container m-auto' >
        <div className='flex justify-between items-center mb-6 md:mb-8' >
          <HeadLine3 className="flex overflow-x-auto space-x-1 md:space-x-2 text-gray-500 ">
            {categoieElement}
          </HeadLine3>
          <div className='hidden md:flex space-x-2' >
            <GridIcon className={gridIconStyle} onClick={setLayoutToGrid} />
            <ListIcon className={listIconStyle} onClick={setLayoutToList} />
          </div>
        </div>
        <WorkSamples layout={layout} />
      </div>
    </div>
  )
}

export default Work;