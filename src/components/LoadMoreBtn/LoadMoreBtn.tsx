import s from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ setPage }) => {
  return (
    <button onClick={setPage} className={s.loadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
