import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	
	render() {
		return (
			<html style={{ color: '#444' }}>
				<Head>
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
					/>
					<meta name="theme-color" content="#673ab7" />
					<link rel="manifest" href="static/manifest.json" />
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
					<link rel="stylesheet" href="static/jquery-ui.css" />
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        				integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
					<link rel="stylesheet" href="https://unpkg.com/react-rangeslider/umd/rangeslider.min.css" />
					<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

					<title>Lotus Trader</title>
				</Head>
				<body>
				
					<Main />
					<NextScript />
				<div className="footer"></div>

					<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
        			integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        			crossorigin="anonymous"></script>
					<script type="text/javascript">
						$(document).ready(function($) {
							
						});				
					</script>
				</body>
			</html>
		);
	}
}