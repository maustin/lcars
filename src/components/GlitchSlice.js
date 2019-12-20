import React from 'react';

class GlitchSlice extends React.Component {
	state = {
		srcNormal: '',
		srcPixelate: '',
		showPixelate: false,
		className: ''
	}
	timeoutId = null;

	scheduleTimeout = () => {
		this.timeoutId = setTimeout(() => {
			this.calculateGlitch();
			this.scheduleTimeout();
		}, (Math.random() * 1200) + 10);
	}

	calculateGlitch = () => {
		let classNames = [];
		if (Math.random() > 0.7) {
			let rnd = Math.random();
			/*if (rnd < 0.2)
				classNames.push('glitch-up');
			else if (rnd < 0.4)
				classNames.push('glitch-down');

			rnd = Math.random();*/
			if (rnd < 0.1)
				classNames.push('glitch-left-hard');
			else if (rnd < 0.2)
				classNames.push('glitch-right-hard');
			else if (rnd < 0.6)
				classNames.push('glitch-left');
			else
				classNames.push('glitch-right');
		}
		
		this.setState({
			showPixelate: Math.random() > 0.7,
			className: classNames.join(' ')
		});
	}

	componentDidMount() {
		this.setState({
			srcNormal: 'logo/logo-00-' + this.props.num + '.png',
			srcPixelate: 'logo/logo-01-' + this.props.num + '.png'
		});

		this.scheduleTimeout();
	}

	componentWillUnmount() {
		clearTimeout(this.timeoutId);
	}

	render() {
		let src = this.state.showPixelate ? this.state.srcPixelate : this.state.srcNormal;

		return (
			<img src={src} className={this.state.className} />
		)
	}
}

export default GlitchSlice;