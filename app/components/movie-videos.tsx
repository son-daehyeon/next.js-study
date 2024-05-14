import { API_URL } from '../contants';

import styles from '../../styles/movie-videos.module.css';

interface IMovieVideosProps {
  id: string;
}

interface IVideo {
  id: string;
  key: string;
  name: string;
}

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  const videos = await response.json();

  return videos.slice(0, 3);
}

export default async function MovieVideos({ id }: IMovieVideosProps) {
  const videos = await getVideos(id);

  return (
    <div className={styles.container}>
      {videos.map((video: IVideo) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
