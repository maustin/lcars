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
		data: null,
		preDelete: false,
		preUpdate: false,
		updating: false,
		deleting: false,
		newStatus: null,
	}
	formRef = React.createRef();
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
		let data = this.state.data || this.props.location.state.data;
		let elements = this.formRef.current.elements;
		let values = {
			id: data.id
		};

		for (let i = 0; i < elements.length; i++) {
			values[elements[i].name] = elements[i].value;
		}

		CharacterModel.update(values)
		.then(res => {
			if (res && res.status && res.status == 200)
			{
				CharacterModel.single(data.id)
				.then(res => {
					this.setState({ updating: false, preUpdate: false, data: res });
				});
			}
			else
				this.props.location.reload();
		});
	}

	doDelete = () => {
		this.setState({ deleting: true });
		let data = this.state.data || this.props.location.state.data;

		CharacterModel.delete(data.id)
		.then(res => this.goBack());
	}

	render() {
		if (!this.state.data && (!this.props.location.state || !this.props.location.state.data))
		{
			return (<h1>ERROR</h1>);
		}

		let data = this.state.data || this.props.location.state.data;
		let hideCancelConfirm = !(this.state.preUpdate || this.state.preDelete);

		let pageStyle = {};
		if (this.state.updating || this.state.deleting) {
			pageStyle.pointerEvents = 'none';
			pageStyle.opacity = 0.5;
		}

		let textStyle = {
			color: this.state.preDelete ? LCARSColors.RED : LCARSColors.TEXT_YELLOW
		};
		let inputStyle = {};
		if (this.state.preUpdate)
			textStyle.display = 'none';
		else
			inputStyle.display = 'none';

		let wrapColor = LCARSColors.PEACH;
		let status = data.status.toLowerCase();
		if (status.includes('deceased'))
			wrapColor = LCARSColors.REDDISH;
		else if (status.includes('missing'))
			wrapColor = LCARSColors.PINK;
		else if (status.includes('resigned'))
			wrapColor = LCARSColors.PURPLE;

		if (this.state.preDelete)
			wrapColor = LCARSColors.RED;

		let textPrefixStyle = {
			color: this.state.preDelete ? LCARSColors.RED : LCARSColors.TEXT_YELLOW_MELLOW
		}

		return (
			<div className='character-detail' style={pageStyle}>
				<div className='character-page-header'>
					<ElbowLeftTop
						skinny
						row='1/3'
						column='1/2'
						color={wrapColor} />
					<Block
						row='1/2'
						column='2/3'
						color={wrapColor}
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
						color={wrapColor}
						blockStyle='pad2xTop'
						text={TextUtils.getRandomNumberFill('xx-xxx')}/>

					<form ref={this.formRef} className='character-detail-body-stats'>
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
							<span
								style={textPrefixStyle}
								className='character-detail-body-stats-row-prefix'>
								CURRENT STATUS
							</span>
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
							<span
								style={textPrefixStyle}
								className='character-detail-body-stats-row-prefix'>
								SPECIES
							</span>
							<span
								className='character-detail-body-stats-row-text'
								style={textStyle}>
								{data['species.name']}
							</span>
							
						</div>
						<div className='character-detail-body-stats-row'>
							<span
								style={textPrefixStyle}
								className='character-detail-body-stats-row-prefix'>
								GENDER
							</span>
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
							<span
								style={textPrefixStyle}
								className='character-detail-body-stats-row-prefix'>
								DATE OF BIRTH
							</span>
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
							<span
								style={textPrefixStyle}
								className='character-detail-body-stats-row-prefix'>
								PORTRAYED BY
							</span>
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
							<span
								style={textPrefixStyle}
								className='character-detail-body-stats-row-prefix'>
								IMAGE URL
							</span>
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
							baseColor={LCARSColors.RED}
							textColor={LCARSColors.REDDISH}
							tabColor={LCARSColors.RED} />
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
							baseColor={LCARSColors.RED}
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