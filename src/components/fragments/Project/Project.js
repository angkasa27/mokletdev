import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import image from '@assets/image'
import useAction from './hooks/useAction'

const Project = ({ project, textColor }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(true)
  const { getDataProject } = useAction({ setLoading, setData })

  useEffect(() => {
    getDataProject(project.projectId)
  }, [])

  return (
    <div className="grid grid-cols-12 gap-4 pt-12 text-left  md:pt-24">
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="relative col-start-1 col-end-13 row-start-1 row-end-4 h-96 overflow-hidden rounded-sm bg-gray-300 md:col-start-6"
      >
        <img src={image.DUMMY.src} alt={data.name} className="h-full w-full " />
      </motion.div>
      <div className="z-10 col-start-1 col-end-13 row-start-1 row-end-4 bg-gray-900 bg-opacity-20 md:hidden" />
      <div className="z-10 col-start-1 col-end-13 row-start-1 mx-4 flex flex-col justify-end md:col-end-6 md:mx-0">
        <h3 className=" mt-3 text-2xl font-bold tracking-wide text-white md:text-4xl md:text-zinc-800 ">
          {data.name}
        </h3>
        <h3 className="text-lg font-medium tracking-wide text-red-500 md:text-2xl  ">
          <a
            href={project?.contributor[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project?.contributor[0]?.name}
          </a>
        </h3>
      </div>
      <div className="z-10 col-start-1 col-end-13 row-start-2 row-end-3 mx-4 flex items-center rounded-sm md:col-end-7 md:mx-0 md:bg-white md:p-3">
        <p className="text-base text-white md:text-lg md:text-zinc-800 ">
          {data.description ?? 'Tidak ada deskripsi'}
        </p>
      </div>
      <div className="z-10 col-start-1 col-end-13 row-start-3 mx-4 md:col-end-6 md:mx-0">
        <div className="hidden flex-wrap md:flex ">
          {data?.topics?.map((tag) => (
            <p
              className={
                'transition-color mr-4 text-xl font-medium tracking-wide opacity-80 duration-300 ease-out  ' +
                textColor
              }
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="flex">
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="  cursor-pointer md:mt-2"
          >
            <svg
              className=" h-8 w-8 fill-current  text-white transition-colors  duration-300 ease-out hover:text-red-500 md:text-zinc-800 "
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C24.2763 30.1077 27.0363 28.0664 28.9917 25.3432C30.947 22.6201 31.9991 19.3524 32 16C32 7.16 24.84 0 16 0Z"
              />
            </svg>
          </a>
          {project?.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className=" ml-4 cursor-pointer md:mt-2"
            >
              <svg
                className=" h-8 w-8  text-white transition-colors  duration-300 ease-out hover:text-red-500 md:text-zinc-800 "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )

  return 'tes'
}

const cardVariants = {
  hover: {
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      type: 'spring',
      bounce: 0,
    },
  },
}

export default Project
