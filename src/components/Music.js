import React, { createContext, useContext, useEffect, useState } from "react";


const MusicContext = createContext();

function MusicProvider({ children }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTrack, setCurrentTrack] = useState("");
	const [volume, setVolume] = useState(1);
	const audioRef = React.createRef();

	useEffect(() => {
		if (currentTrack) {
			if (audioRef.current.src !== currentTrack)
				audioRef.current.src = currentTrack;
			audioRef.current.volume = volume;
			if (isPlaying)
				audioRef.current.play().catch(error => {
					console.error("error");
				});
			else
				audioRef.current.pause();
		} else {
			audioRef.current.pause();
			setIsPlaying(false);
		}
	}, [currentTrack, isPlaying, volume]);

	useEffect(() => {
		const play = () => {

			if (!currentTrack || isPlaying) return;
			audioRef.current.play().catch(error => {
				console.error("error");
			});
			setIsPlaying(true);
		};

		const interactions = ['mousedown', 'keydown', 'touchstart', 'gamepadconnected'];

		interactions.forEach(event => {
			document.addEventListener(event, play);
		});

		return (() => {
			interactions.forEach(event => {
				document.removeEventListener(event, play);
			});
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current.currentTime = 0;
			}
		});
	});

	const changeTrack = (src) => {
		if (src !== currentTrack) {
			setCurrentTrack(src);
			setIsPlaying(true);
		} else {
			togglePlay();
		}
	};

	const togglePlay = () => {
		if (currentTrack)
			setIsPlaying(!isPlaying);
	};

	const changeVolume = vol => {
		setVolume(vol);
		audioRef.current.volume = vol;
	};


	return (
		<MusicContext.Provider value={{ isPlaying, setIsPlaying, changeTrack, currentTrack, changeVolume }}>
			{children}
			<audio ref={audioRef} src={currentTrack} autoPlay={false} loop={true} />
		</MusicContext.Provider>
	);
};

function Music({ src }) {
	const { currentTrack, changeTrack } = useContext(MusicContext);


	useEffect(() => {
		if (src !== currentTrack) {
			changeTrack(src);
		}
	}, [changeTrack, src]);

	return null;
}

export { Music, MusicContext, MusicProvider };
