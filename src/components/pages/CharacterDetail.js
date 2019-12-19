import React from 'react';
import * as LCARSColors from '../../utils/LCARSColors';
import * as TextUtils from '../../utils/TextUtils';
import ElbowLeftTop from '../ElbowLeftTop';
import BlockButton from '../BlockButton';
import Block from '../Block';

class CharacterDetail extends React.Component {
	render() {
		if (!this.props.location.state || !this.props.location.state.data) {
			return (<h1>ERROR</h1>);
		}

		let data = this.props.location.state.data;

		return (
			<div className='character-detail'>
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
					<div className='character-detail-body-stats'>
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
					</div>
					<div className='character-detail-body-buttons'>
						<BlockButton
							text='BACK'
							baseColor={LCARSColors.ORANGE}
							tabColor={LCARSColors.ORANGE} />
						<BlockButton
							text='UPDATE'
							baseColor={LCARSColors.PURPLE}
							tabColor={LCARSColors.PURPLE} />
						<BlockButton
							text='DELETE'
							baseColor='#d61402'
							textColor={LCARSColors.REDDISH}
							tabColor={LCARSColors.REDDISH} />
						<div style={{ flexGrow: 1}}/>
						<BlockButton
							text='CANCEL'
							baseColor={LCARSColors.ORANGE}
							textColor='#000'
							tabColor='#000' />
						<BlockButton
							text='CONFIRM'
							baseColor='#d61402'
							textColor='#000'
							tabColor='#000' />
					</div>
				</div>
			</div>
		)
	}
}

export default CharacterDetail;