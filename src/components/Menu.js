import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DefaultWindowMenu, MenuItem, WindowMenu } from 'react-electron-menu';

/** UI Functions */
//TODO About screen
function onAbout() {
  console.log("Show and about screen");
}

function onLoad() {
  console.log("Show Load Dialogue");
}

/** End of UI Functions */

/** Render Functions */
function renderFileMenu() {
  let appName = "File";
  const os = this.context.electron.remote.require("os");
  const isMac = os.platform() === 'darwin';
  if (isMac) {
    appName = "Translation Tool"
  }

  return (
    <MenuItem id="file" label={appName}>
      <MenuItem label="About" onClick={onAbout.bind(this)}/>
      <MenuItem label="Load" onClick={onLoad.bind(this)}/>
      <MenuItem role="quit"/>
    </MenuItem>
  );
}
/** End of Render Functions */

class Menu extends Component {
  render() {
    return (
      <div>
        <WindowMenu>
          {renderFileMenu.call(this)}
          <DefaultWindowMenu/>
        </WindowMenu>
      </div>
    );
  }
}

Menu.contextTypes = {
  electron: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
  }
}



export default connect(mapStateToProps)(Menu);