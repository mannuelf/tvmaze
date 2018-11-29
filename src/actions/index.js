export const GET_TV_SHOW = 'GET_TV_SHOW';

export function getTvShow(tv_show) {
  return {
    type: 'GET_TV_SHOW',
    tv_show
  }
}
