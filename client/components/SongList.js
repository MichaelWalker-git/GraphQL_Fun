import React, {useState} from "react";
import { gql, useQuery } from '@apollo/client';
import {graphql} from "react-apollo";

const QUERY_ALL_SONGS = gql`
	query getAllSongs{
		songs {
			id
			title
		}
	}
 `;

function SongList() {
	let [songs, setSongs] = useState(null);
	const {loading, error, data} = useQuery(QUERY_ALL_SONGS);

	if (loading) {
		return <p>Loading ...</p>;
	}
	console.log(data.songs)

	return (
		<div> {data.songs.map((song) => (
			<div key={song.id}>
				{song.id} - {song.title}
			</div>
		))}</div>
	)
}


export default SongList;
