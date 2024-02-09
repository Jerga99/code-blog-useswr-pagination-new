import useSWRInfinite from 'swr/infinite';
import { getBlogs } from 'actions';

const BLOGS_COUNT = 6;

export const useGetBlogsPages = ({filter}) => {
  const result = useSWRInfinite(
    (index, previousPageData) => {
      if (previousPageData && !previousPageData.length) return null

      return `/api/blogs?offset=${index * BLOGS_COUNT}&limit=${BLOGS_COUNT}&date=${filter.date.asc ? 'asc' : 'desc'}`
    },
    getBlogs,
  )

  let hitEnd = false;
  const { data } = result;

  if (data) {
    hitEnd = data[data.length - 1].length === 0
  }

  return {...result, hitEnd}
}
