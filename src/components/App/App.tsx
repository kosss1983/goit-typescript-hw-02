import './App.css';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import ImageModal from '../ImageModal/ImageModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import React, { useEffect, useState } from 'react';
import { fetchImages } from '../../images-api';
import { Image } from './App.types.js';
import toast, { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const [modalUrl, setModalUrl] = useState<string>('');

  type fetchData = {
    results: [];
    total_pages: number;
  };

  const handleSetPage = () => {
    setPage(prev => prev + 1);
  };

  const handleSearch = (query: string) => {
    if (query.trim() === '') {
      return toast.error('The search field must not be empty!');
    }
    setImages([]);
    setTotalPages(0);
    setPage(1);
    setQuery(query.trim());
  };

  const handleOpenModal = (url: string) => {
    setModalUrl(url);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        const { data, status } = await fetchImages<fetchData>(query, page);

        if (status !== 200) {
          throw status;
        }

        const { results, total_pages } = data;
        setTotalPages(total_pages);
        setImages(prev => [...prev, ...results]);
      } catch (e) {
        console.error('FETCH REQUEST FAILED: ', e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (query.trim() !== '') {
      getData();
    }
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery onClickImage={handleOpenModal} images={images} />
      <ImageModal
        onCloseModal={handleCloseModal}
        modal={modal}
        url={modalUrl}
      />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <Toaster />
      {totalPages > page && !loading && <LoadMoreBtn setPage={handleSetPage} />}
    </>
  );
};

export default App;
