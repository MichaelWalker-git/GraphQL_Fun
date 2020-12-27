import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

import Lyrics from "./components/Lyrics";
import {setContext} from "@apollo/client/link/context";
import SongList from "./components/SongList";

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: "http://localhost:4000/graphql"
});


const Root = () => {
	return (
		<ApolloProvider
			client={client}>
			<div>Lyrical TEST</div>
			<SongList/>
			<Lyrics/>
		</ApolloProvider>
	)
};

ReactDOM.render(
	<Root/>,
	document.querySelector('#root')
);
