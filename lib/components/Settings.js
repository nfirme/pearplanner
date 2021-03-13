"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Settings.css");

var _reactSettingsPane = require("react-settings-pane");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Settings extends _react.default.Component {
  constructor(props) {
    super(props); // You will maybe receive your settings from this.props or do a fetch request in your componentWillMount
    // but here is an example of how it should look like:

    this.state = {
      "mysettings.general.name": "Desi Ramirez",
      "mysettings.general.username": "dram622",
      "mysettings.general.color-theme": "purple",
      "mysettings.general.email": "email here",
      "mysettings.general.picture": "earth",
      "mysettings.profile.firstname": "Desi",
      "mysettings.profile.lastname": "Ramirez"
    }; // Save settings after close

    this._leavePaneHandler = (wasSaved, newSettings, oldSettings) => {
      // "wasSaved" indicates wheather the pane was just closed or the save button was clicked.
      if (wasSaved && newSettings !== oldSettings) {
        // do something with the settings, e.g. save via ajax.
        this.setState(newSettings);
      }

      this.hidePrefs();
    }; // React if a single setting changed

    /* this._settingsChanged = ev => {};*/
    // Define your menu


    this._menu = [{
      title: "General",
      // Title that is displayed as text in the menu
      url: "/settings/general" // Identifier (url-slug)

    }, {
      title: "Profile",
      url: "/settings/profile"
    }, {
      title: "Notifications",
      url: "/settings/notifications"
    }, {
      title: "Language",
      url: "/settings/language"
    }, {
      title: "Appearance",
      url: "/settings/appearance"
    }, {
      title: "Plugins",
      url: "/settings/plugins"
    }, {
      title: "About",
      url: "/settings/about"
    }];
  }

  hidePrefs() {
    this.prefs.className = "md-modal";
    this.overlay.style.visibility = "";
  }

  showPrefs() {
    this.prefs.className = "md-modal show";
    this.overlay.style.visibility = "visible";
  }

  render() {
    // Get settings
    let settings = this.state; // Define one of your Settings pages

    /*=
     const dynamicOptionsForGeneralPage = [
       {
         key: null
         label: 'Account',
         type: 'headline',
       },
       {
         key: 'mysettings.general.email',
         label: 'E-Mail address',
         type: 'text',
       },
       {
         key: 'mysettings.general.password',
         label: 'Password',
         type: 'password',
       },
       {
         key: 'mysettings.general.password-repeat',
         label: 'Password repeat',
         type: 'password',
       },
       {
         key: null,
         label: 'Appearance',
         type: 'headline',
       },
       {
         key: 'mysettings.general.color-theme',
         label: 'Color Theme',
         type: 'custom',
         component: <select><option value="blue">Blue</option><option value="red">Red</option></select>,
       }
     ];
       // Then use with:
     // <SettingsPage handler="/settings/general" options={dynamicOptionsForGeneralPage} />
     */
    // Return your Settings Pane

    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      className: "page-header"
    }, /*#__PURE__*/_react.default.createElement("h1", null, "Settings")), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        margin: "30px 0 90px 0"
      }
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: this.showPrefs.bind(this),
      className: "btn btn-default"
    }, "Settings")), /*#__PURE__*/_react.default.createElement("div", {
      ref: _ref => this.overlay = _ref,
      className: "overlay"
    }), /*#__PURE__*/_react.default.createElement("div", {
      ref: _ref2 => this.prefs = _ref2,
      className: "md-modal"
    }, /*#__PURE__*/_react.default.createElement(_reactSettingsPane.SettingsPane, {
      items: this._menu,
      index: "/settings/general",
      settings: settings,
      onChange: this._settingsChanged,
      onPaneLeave: this._leavePaneHandler
    }, /*#__PURE__*/_react.default.createElement(_reactSettingsPane.SettingsMenu, {
      headline: "General Settings"
    }), /*#__PURE__*/_react.default.createElement(_reactSettingsPane.SettingsContent, {
      header: true
    }, /*#__PURE__*/_react.default.createElement(_reactSettingsPane.SettingsPage, {
      handler: "/settings/general"
    }, /*#__PURE__*/_react.default.createElement("fieldset", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "generalName"
    }, "Name: "), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control",
      name: "mysettings.general.name",
      placeholder: "Name",
      id: "generalName",
      onChange: this._settingsChanged,
      defaultValue: settings["mysettings.general.name"]
    })), /*#__PURE__*/_react.default.createElement("fieldset", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "generalUsername"
    }, "Username: "), /*#__PURE__*/_react.default.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "input-group-addon",
      id: "basic-addon1"
    }, "@"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      name: "mysettings.general.username",
      className: "form-control",
      placeholder: "Username",
      "aria-describedby": "basic-addon1",
      onChange: this._settingsChanged,
      defaultValue: settings["mysettings.general.username"]
    }))), /*#__PURE__*/_react.default.createElement("fieldset", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "generalMail"
    }, "E-Mail address: "), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control",
      name: "mysettings.general.email",
      placeholder: "E-Mail Address",
      id: "generalMail",
      onChange: this._settingsChanged,
      defaultValue: settings["mysettings.general.email"]
    })), /*#__PURE__*/_react.default.createElement("fieldset", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "generalPic"
    }, "Picture: "), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control",
      name: "mysettings.general.picture",
      placeholder: "Picture",
      id: "generalPic",
      onChange: this._settingsChanged,
      defaultValue: settings["mysettings.general.picture"]
    })), /*#__PURE__*/_react.default.createElement("fieldset", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "profileColor"
    }, "Color-Theme: "), /*#__PURE__*/_react.default.createElement("select", {
      name: "mysettings.general.color-theme",
      id: "profileColor",
      className: "form-control",
      defaultValue: settings["mysettings.general.color-theme"]
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: "blue"
    }, "Blue"), /*#__PURE__*/_react.default.createElement("option", {
      value: "red"
    }, "Red"), /*#__PURE__*/_react.default.createElement("option", {
      value: "purple"
    }, "Purple"), /*#__PURE__*/_react.default.createElement("option", {
      value: "orange"
    }, "Orange")))), /*#__PURE__*/_react.default.createElement(_reactSettingsPane.SettingsPage, {
      handler: "/settings/profile"
    }, /*#__PURE__*/_react.default.createElement("fieldset", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "profileFirstname"
    }, "Firstname: "), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control",
      name: "mysettings.profile.firstname",
      placeholder: "Firstname",
      id: "profileFirstname",
      onChange: this._settingsChanged,
      defaultValue: settings["mysettings.profile.firstname"]
    })), /*#__PURE__*/_react.default.createElement("fieldset", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "profileLastname"
    }, "Lastname: "), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control",
      name: "mysettings.profile.lastname",
      placeholder: "Lastname",
      id: "profileLastname",
      onChange: this._settingsChanged,
      defaultValue: settings["mysettings.profile.lastname"]
    })), /*#__PURE__*/_react.default.createElement("fieldset", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "profileBiography"
    }, "Biography: "), /*#__PURE__*/_react.default.createElement("textarea", {
      className: "form-control",
      name: "mysettings.profile.biography",
      placeholder: "Biography",
      id: "profileBiography",
      onChange: this._settingsChanged,
      defaultValue: settings["mysettings.profile.biography"]
    })))))));
  }

}

var _default = Settings;
exports.default = _default;