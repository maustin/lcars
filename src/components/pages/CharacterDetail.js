import React from 'react';
import { withRouter } from 'react-router-dom';
import * as LCARSColors from '../../utils/LCARSColors';
import * as TextUtils from '../../utils/TextUtils';
import CharacterModel from '../../models/CharacterModel';
import ElbowLeftTop from '../ElbowLeftTop';
import BlockButton from '../BlockButton';
import Block from '../Block';

class CharacterDetail extends React.Component {
	state = {
		preDelete: false,
		preUpdate: false,
		updating: false,
		deleting: false,
		newStatus: null,
	}
	nameRef = React.createRef();
	statusRef = React.createRef();
	speciesRef = React.createRef();
	genderRef = React.createRef();
	dobRef = React.createRef();
	actorRef = React.createRef();
	imageRef = React.createRef();

	goBack = event => {
		this.props.history.goBack();
	}

	onUpdateClick = event => {
		this.setState({ preUpdate: true });
	}

	onDeleteClick = event => {
		this.setState({ preDelete: true });
	}

	onCancelClick = event => {
		this.setState({ preUpdate: false, preDelete: false });
	}

	onConfirmClick = event => {
		if (this.state.preUpdate)
			this.doUpdate();
		else if (this.state.preDelete)
			this.doDelete();
	}

	doUpdate = () => {
		this.setState({ updating: true });
	}

	doDelete = () => {
		this.setState({ deleting: true });
		CharacterModel.delete(this.props.location.state.data.id)
		.then(res => this.goBack());
	}

	render() {
		if (!this.props.location.state || !this.props.location.state.data) {
			return (<h1>ERROR</h1>);
		}

		let data = this.props.location.state.data;
		let hideCancelConfirm = !(this.state.preUpdate || this.state.preDelete);

		let pageStyle = {};
		if (this.state.updating || this.state.deleting) {
			pageStyle.pointerEvents = 'none';
			pageStyle.opacity = 0.5;
		}

		let textStyle = {};
		let inputStyle = {};
		if (this.state.preUpdate)
			textStyle.display = 'none';
		else
			inputStyle.display = 'none';

		return (
			<div className='character-detail' style={pageStyle}>
				<div className='character-page-header'>
					<ElbowLeftTop
						skinny
						row='1/3'
						column='1/2'
						color={LCARSColors.BEIGE} />
					<Block
						row='1/2'
						column='2/3'
						color={LCARSColors.BEIGE}
						blockStyle='' />
				</div>
				
				<div className='character-detail-body'>
					<img
						className='character-detail-body-image'
						src={data.image}
						alt=''
						onError={(event) => event.target.src = 'placeholder.png'}/>
					<Block
						row='2/3'
						column='1/2'
						color={LCARSColors.BEIGE}
						blockStyle='pad2xTop'
						text={TextUtils.getRandomNumberFill('xx-xxx')}/>

					<form className='character-detail-body-stats'>
						<span
							className='character-detail-body-stats-name'
							style={textStyle}>
							{data.name}
						</span>
						<input
							ref={this.nameRef}
							type='text'
							name='name'
							defaultValue={data.name}
							className='text-input text-input-big'
							style={inputStyle}
							required />
						<div className='character-detail-body-stats-row'>
							<span className='character-detail-body-stats-row-prefix'>CURRENT STATUS</span>
							<span
								className='character-detail-body-stats-row-text'
								style={textStyle}>
								{data.status}
							</span>
							<input
								ref={this.statusRef}
								type='text'
								name='status'
								defaultValue={data.status}
								className='text-input'
								style={inputStyle}
								required />
						</div>
						<div className='character-detail-body-stats-row'>
							<span className='character-detail-body-stats-row-prefix'>SPECIES</span>
							<span
								className='character-detail-body-stats-row-text'
								style={textStyle}>
								{data['species.name']}
							</span>
							
						</div>
						<div className='character-detail-body-stats-row'>
							<span className='character-detail-body-stats-row-prefix'>GENDER</span>
							<span
								className='character-detail-body-stats-row-text'
								style={textStyle}>
								{TextUtils.getGenderString(data.gender)}
							</span>
							<input
								ref={this.genderRef}
								type='text'
								name='gender'
								defaultValue={data.gender}
								className='text-input'
								style={inputStyle}
								required />
						</div>
						<div className='character-detail-body-stats-row'>
							<span className='character-detail-body-stats-row-prefix'>DATE OF BIRTH</span>
							<span
								className='character-detail-body-stats-row-text'
								style={textStyle}>
								{data.dob}
							</span>
							<input
								ref={this.dobRef}
								type='text'
								name='dob'
								defaultValue={data.dob}
								className='text-input'
								style={inputStyle}
								required />
						</div>
						<div className='character-detail-body-stats-row'>
							<span className='character-detail-body-stats-row-prefix'>PORTRAYED BY</span>
							<span
								className='character-detail-body-stats-row-text'
								style={textStyle}>
								{data.actor}
							</span>
							<input
								ref={this.actorRef}
								type='text'
								name='actor'
								defaultValue={data.actor}
								className='text-input'
								style={inputStyle}
								required />
						</div>
						<div className='character-detail-body-stats-row'>
							<span className='character-detail-body-stats-row-prefix'>IMAGE URL</span>
						</div>
						<span
							className='character-detail-body-stats-row-text gross-url'
							style={textStyle}>
							{data.image}
						</span>
						<textarea
							ref={this.imageRef}
							type='url'
							name='image'
							defaultValue={data.image}
							className='text-input-url'
							style={inputStyle}
							required />
					</form>
					<div className='character-detail-body-buttons'>
						<BlockButton
							text='BACK'
							onClick={this.goBack}
							baseColor={LCARSColors.ORANGE}
							tabColor={LCARSColors.ORANGE} />
						<BlockButton
							text='UPDATE'
							onClick={this.onUpdateClick}
							baseColor={LCARSColors.ORANGE}
							tabColor={LCARSColors.ORANGE} />
						<BlockButton
							text='DELETE'
							onClick={this.onDeleteClick}
							baseColor='#d61402'
							textColor={LCARSColors.REDDISH}
							tabColor={LCARSColors.REDDISH} />
						<div style={{ flexGrow: 1}}/>
						<BlockButton
							text='CANCEL'
							hide={hideCancelConfirm}
							onClick={this.onCancelClick}
							baseColor={LCARSColors.PURPLE}
							textColor='#000'
							tabColor='#000' />
						<BlockButton
							text='CONFIRM'
							hide={hideCancelConfirm}
							onClick={this.onConfirmClick}
							baseColor='#d61402'
							textColor='#000'
							tabColor='#000' />
					</div>
				</div>
			</div>
		)
	}
}

/*
<input
								ref={this.speciesRef}
								type='text'
								name='species'
								defaultValue={data.species}
								className='text-input'
								style={inputStyle}
								required />
*/

export default withRouter(CharacterDetail);