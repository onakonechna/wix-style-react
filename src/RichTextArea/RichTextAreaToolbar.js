import React, {PropTypes} from 'react';
import WixComponent from '../WixComponent';
import RichTextAreaButton from './RichTextAreaButton';
import RichTextAreaLinkButton from './RichTextAreaLinkButton';
import styles from './RichTextAreaToolbar.scss';

class RichTextAreaToolbar extends WixComponent {
  render() {
    return (
      <div className={styles.container}>
        {this.renderButton('mark', 'bold')}
        {this.renderButton('mark', 'italic')}
        {this.renderButton('mark', 'underline')}
        {this.renderLinkButton()}
        {this.renderButton('block', 'unordered-list')}
        {this.renderButton('block', 'ordered-list')}
      </div>
    );
  }

  renderButton(action, type) {
    const {onClick, hasMark, hasListBlock} = this.props;
    const isActive = (action === 'mark') ? hasMark : hasListBlock;

    return (
      <div className={styles.button}>
        <RichTextAreaButton
          onClick={() => onClick(action, type)}
          type={type}
          isActive={isActive(type)}
          />
      </div>
    );
  }

  renderLinkButton() {
    const {onClick, hasLink} = this.props;
    const type = 'link';
    const action = type;

    return (
      <div className={styles.button}>
        <RichTextAreaLinkButton
          onClick={() => onClick(action, type)}
          type={type}
          isActive={hasLink()}
          />
      </div>
    );
  }
}

RichTextAreaToolbar.propTypes = {
  onClick: PropTypes.func,
  hasMark: PropTypes.func.isRequired,
  hasListBlock: PropTypes.func.isRequired,
  hasLink: PropTypes.func.isRequired,
};

export default RichTextAreaToolbar;
