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
	}

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
		//<input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10">
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
						<span className='character-detail-body-stats-name'>{data.name}</span>
						<div className='character-detail-body-stats-row'>
							<span className='character-detail-body-stats-row-prefix'>CURRENT STATUS</span>
							<span className='character-detail-body-stats-row-text'>{data.status}</span>
						</div>
						<div className='character-detail-body-stats-row'>
							<span className='character-detail-body-stats-row-prefix'>SPECIES</span>
							<span className='character-detail-body-stats-row-text'>{data['species.name']}</span>
						</div>
						<div className='character-detail-body-stats-row'>
							<span className='character-detail-body-stats-row-prefix'>GENDER</span>
							<span className='character-detail-body-stats-row-text'>{TextUtils.getGenderString(data.gender)}</span>
						</div>
						<div className='character-detail-body-stats-row'>
							<span className='character-detail-body-stats-row-prefix'>DATE OF BIRTH</span>
							<span className='character-detail-body-stats-row-text'>{data.dob}</span>
						</div>
						<div className='character-detail-body-stats-row'>
							<span className='character-detail-body-stats-row-prefix'>PORTRAYED BY</span>
							<span className='character-detail-body-stats-row-text'>{data.actor}</span>
						</div>
						<div className='character-detail-body-stats-row'>
							<span className='character-detail-body-stats-row-prefix'>IMAGE URL</span>
						</div>
						<span
							className='character-detail-body-stats-row-text gross-url'>
							{data.image}
						</span>
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

export default withRouter(CharacterDetail);