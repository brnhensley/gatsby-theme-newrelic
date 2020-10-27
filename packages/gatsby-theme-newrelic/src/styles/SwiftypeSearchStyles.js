import { css } from '@emotion/core';
import { rgba } from 'polished';

const bullet = '2022';
const AB = 'AB';
const BB = 'BB';
const chevronLeft = '2039';
const chevronRight = '203A';

export default css`
  .rc-pagination {
    font-family: 'Arial';
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 1rem;
    font-size: 1rem;
    width: fit-content;
    margin-top: 1rem;
    align-self: center;
  }
  .rc-pagination > li {
    list-style: none;
  }
  .rc-pagination-total-text {
    float: left;
    height: 30px;
    line-height: 30px;
    list-style: none;
    padding: 0;
    margin: 0 8px 0 0;
  }
  .rc-pagination:after {
    content: ' ';
    display: block;
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }
  .rc-pagination-item {
    cursor: pointer;
    border-radius: 6px;
    min-width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    list-style: none;
    float: left;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    margin: 0rem 1rem;
  }
  .rc-pagination-item a {
    text-decoration: none;
    color: var(--link-color);
  }
  .rc-pagination-item:hover {
    border-color: #2db7f5;
    background: var(--tertiary-background-color);
    a {
      color: var(--link-color);
    }
  }
  .rc-pagination-item-disabled {
    cursor: not-allowed;
  }
  .rc-pagination-item-disabled:hover {
    border-color: #d9d9d9;
  }
  .rc-pagination-item-disabled:hover a {
    color: #d9d9d9;
  }
  .rc-pagination-item-active {
    background-color: #2db7f5;
    border-color: #2db7f5;
  }
  .rc-pagination-item-active a {
    color: #fff;
  }
  .rc-pagination-item-active:hover a {
    color: #fff;
  }

  .rc-pagination-next:hover {
    background: var(--tertiary-background-color);
    a {
      color: var(--link-color);
    }
  }
  .rc-pagination-jump-next:hover {
    background: var(--tertiary-background-color);
  }
  
  .rc-pagination-jump-prev:hover {
    background: var(--tertiary-background-color);
  }

  .rc-pagination-prev:hover {
    background: var(--tertiary-background-color);
    a {
      color: var(--link-color);
    }
  }
  .rc-pagination-jump-prev:after,
  .rc-pagination-jump-next:after {
    content: '\\${bullet}\\${bullet}\\${bullet}';
    display: block;
    letter-spacing: 2px;
    color: #ccc;
    font-size: 12px;
    margin-top: 1px;
  }
  .rc-pagination-jump-prev:hover:after,
  .rc-pagination-jump-next:hover:after {
    color: var(--link-color) !important;
  }
  .rc-pagination-jump-prev:hover:after {
    content: '\\${AB}';
  }
  .rc-pagination-jump-next:hover:after {
    content: '\\${BB}';
  }
  .rc-pagination-jump-prev-custom-icon,
  .rc-pagination-jump-next-custom-icon {
    position: relative;
  }
  .rc-pagination-jump-prev-custom-icon:after,
  .rc-pagination-jump-next-custom-icon:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    transition: all 0.2s;
    content: '\\${bullet}\\${bullet}\\${bullet}';
    opacity: 1;
    display: block;
    letter-spacing: 2px;
    color: #ccc;
    font-size: 12px;
    margin-top: 1px;
  }
  .rc-pagination-jump-prev-custom-icon .custom-icon-jump-prev,
  .rc-pagination-jump-next-custom-icon .custom-icon-jump-prev,
  .rc-pagination-jump-prev-custom-icon .custom-icon-jump-next,
  .rc-pagination-jump-next-custom-icon .custom-icon-jump-next {
    opacity: 0;
    transition: all 0.2s;
  }
  .rc-pagination-jump-prev-custom-icon:hover:after,
  .rc-pagination-jump-next-custom-icon:hover:after {
    opacity: 0;
    color: #ccc;
  }
  .rc-pagination-jump-prev-custom-icon:hover .custom-icon-jump-prev,
  .rc-pagination-jump-next-custom-icon:hover .custom-icon-jump-prev,
  .rc-pagination-jump-prev-custom-icon:hover .custom-icon-jump-next,
  .rc-pagination-jump-next-custom-icon:hover .custom-icon-jump-next {
    opacity: 1;
    color: #2db7f5;
  }
  .rc-pagination-prev,
  .rc-pagination-jump-prev,
  .rc-pagination-jump-next {
    margin-right: 8px;
  }
  .rc-pagination-prev,
  .rc-pagination-next,
  .rc-pagination-jump-prev,
  .rc-pagination-jump-next {
    cursor: pointer;
    color: #666;
    font-size: 10px;
    border-radius: 6px;
    list-style: none;
    min-width: 28px;
    height: 28px;
    line-height: 28px;
    float: left;
    text-align: center;
  }
  .rc-pagination-prev a:after {
    content: '\\${chevronLeft}';
    display: block;
  }
  .rc-pagination-next a:after {
    content: '\\${chevronRight}';
    display: block;
  }
  .rc-pagination-prev,
  .rc-pagination-next {
    border: 1px solid #d9d9d9;
    font-size: 18px;
  }
  .rc-pagination-prev a,
  .rc-pagination-next a {
    color: #666;
  }
  .rc-pagination-prev a:after,
  .rc-pagination-next a:after {
    margin-top: -1px;
  }
  .rc-pagination-disabled {
    cursor: not-allowed;
  }
  .rc-pagination-disabled a {
    color: #ccc;
  }
  .rc-pagination-disabled .rc-pagination-item,
  .rc-pagination-disabled .rc-pagination-prev,
  .rc-pagination-disabled .rc-pagination-next {
    cursor: not-allowed;
  }
  .rc-pagination-disabled .rc-pagination-item:hover,
  .rc-pagination-disabled .rc-pagination-prev:hover,
  .rc-pagination-disabled .rc-pagination-next:hover {
    border-color: #d9d9d9;
  }
  .rc-pagination-disabled .rc-pagination-item:hover a,
  .rc-pagination-disabled .rc-pagination-prev:hover a,
  .rc-pagination-disabled .rc-pagination-next:hover a {
    color: #d9d9d9;
  }
  .rc-pagination-disabled .rc-pagination-jump-prev,
  .rc-pagination-disabled .rc-pagination-jump-next {
    pointer-events: none;
  }
  .rc-pagination-options {
    float: left;
    margin-left: 15px;
  }
  .rc-pagination-options-size-changer {
    float: left;
    width: 80px;
  }
  .rc-pagination-options-quick-jumper {
    float: left;
    margin-left: 16px;
    height: 28px;
    line-height: 28px;
  }
  .rc-pagination-options-quick-jumper input {
    margin: 0 8px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 6px;
    border: 1px solid #d9d9d9;
    outline: none;
    padding: 3px 12px;
    width: 50px;
    height: 28px;
  }
  .rc-pagination-options-quick-jumper input:hover {
    border-color: #2db7f5;
  }
  .rc-pagination-options-quick-jumper button {
    display: inline-block;
    margin: 0 8px;
    font-weight: 500;
    text-align: center;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 0 15px;
    font-size: 12px;
    border-radius: 6px;
    height: 28px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
  }
  .rc-pagination-options-quick-jumper button:hover,
  .rc-pagination-options-quick-jumper button:active,
  .rc-pagination-options-quick-jumper button:focus {
    color: #2db7f5;
    background-color: #fff;
    border-color: #2db7f5;
  }
  .rc-pagination-simple .rc-pagination-prev,
  .rc-pagination-simple .rc-pagination-next {
    border: none;
    height: 24px;
    line-height: 24px;
    margin: 0;
    font-size: 18px;
  }
  .rc-pagination-simple .rc-pagination-simple-pager {
    float: left;
    margin-right: 8px;
    list-style: none;
  }
  .rc-pagination-simple .rc-pagination-simple-pager .rc-pagination-slash {
    margin: 0 10px;
  }
  .rc-pagination-simple .rc-pagination-simple-pager input {
    margin: 0 8px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 6px;
    border: 1px solid #d9d9d9;
    outline: none;
    padding: 5px 8px;
    min-height: 20px;
  }
  .rc-pagination-simple .rc-pagination-simple-pager input:hover {
    border-color: #2db7f5;
  }
  .rc-pagination-simple .rc-pagination-simple-pager button {
    display: inline-block;
    margin: 0 8px;
    font-weight: 500;
    text-align: center;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 0 8px;
    font-size: 12px;
    border-radius: 6px;
    height: 26px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
  }
  .rc-pagination-simple .rc-pagination-simple-pager button:hover,
  .rc-pagination-simple .rc-pagination-simple-pager button:active,
  .rc-pagination-simple .rc-pagination-simple-pager button:focus {
    color: #2db7f5;
    background-color: #fff;
    border-color: #2db7f5;
  }
  @media only screen and (max-width: 1024px) {
    .rc-pagination-item-after-jump-prev,
    .rc-pagination-item-before-jump-next {
      display: none;
    }
  }
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  .sui-layout {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  /**
 * Header / Searchbox
 */
  .sui-layout-header {
    padding: 32px 24px;
    border-bottom: 1px solid #eeeeee;
  }
  /**
 * Body
 */
  .sui-layout-body {
    background: #fcfcfc;
  }
  .sui-layout-body:after {
    content: '';
    height: 80px;
    width: 100%;
    display: block;
    position: relative;
    background: linear-gradient(to bottom, #fcfcfc 0%, #ffffff 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fcfcfc', endColorstr='#ffffff',GradientType=0 );
  }
  @media (max-width: 800px) {
    .sui-layout-body:after {
      display: none;
    }
  }
  .sui-layout-body__inner {
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    padding: 0 24px;
  }
  @media (max-width: 800px) {
    .sui-layout-body__inner {
      display: block;
      padding: 0 15px;
    }
  }
  /**
 * Main / Results
 */
  .sui-layout-main {
    width: 76%;
    padding: 32px 0 32px 32px;
  }
  @media (max-width: 800px) {
    .sui-layout-main {
      width: 100%;
      padding-left: 0;
    }
  }
  .sui-layout-main-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .sui-layout-main-header__inner {
    font-size: 12px;
    color: #4a4b4b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .sui-layout-main-footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .sui-search-error {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color: red;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 180px);
  }
  .sui-search-error.no-error {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 180px);
  }
  .sui-facet {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    margin: 0;
    padding: 0;
    border: 0;
  }
  .sui-facet + .sui-facet {
    margin-top: 32px;
  }
  .sui-sorting + .sui-facet {
    margin-top: 32px;
  }
  .sui-facet__title {
    text-transform: uppercase;
    font-size: 12px;
    color: #8b9bad;
    letter-spacing: 1px;
    padding: 0;
  }
  .sui-facet__list {
    line-height: 1.5;
    font-size: 13px;
    margin: 8px 0;
    padding: 0;
  }
  .sui-facet__count {
    color: #888888;
    font-size: 0.85em;
    margin-left: 20px;
    display: inline-block;
    padding-top: 2px;
  }
  .sui-multi-checkbox-facet {
    color: var(--link-color);
    font-size: 13px;
    margin: 8px 0;
  }
  .sui-multi-checkbox-facet__option-label {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  .sui-multi-checkbox-facet__option-input-wrapper {
    flex: 1;
  }
  .sui-multi-checkbox-facet__checkbox {
    margin-right: 8px;
    cursor: pointer;
  }
  .sui-multi-checkbox-facet__option-count {
    color: #888888;
    font-size: 0.85em;
    margin: 0 20px 0 5px;
  }
  .sui-facet-view-more {
    display: block;
    cursor: pointer;
    color: var(--link-color);
    font-size: 13px;
    font-family: inherit;
    line-height: inherit;
    text-align: left;
    border: unset;
    padding: unset;
    background: unset;
  }
  .sui-facet-view-more:hover,
  .sui-facet-view-more:focus {
    background-color: var(--tertiary-background-color);
    outline: 4px solid var(--tertiary-background-color);
  }
  .sui-facet-search {
    margin: 6px 0px 0px 0px;
  }
  .sui-facet-search__text-input {
    width: 100%;
    height: 100%;
    padding: 6px;
    margin: 0;
    font-family: inherit;
    border: 1px solid #cccccc;
    border-radius: 4px;
    outline: none;
  }
  .sui-facet-search__text-input:focus {
    border: 1px solid var(--link-color);
  }
  .sui-boolean-facet {
    color: var(--link-color);
    font-size: 13px;
    margin: 8px 0;
  }
  .sui-boolean-facet__option-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  .sui-boolean-facet__option-input-wrapper {
    flex: 1;
  }
  .sui-boolean-facet__checkbox {
    margin-right: 8px;
    cursor: pointer;
  }
  .sui-boolean-facet__option-count {
    color: #888888;
    font-size: 0.85em;
    margin-left: 24px;
  }
  .sui-single-option-facet {
    font-size: 13px;
    margin: 8px 0;
    padding: 0;
    list-style: none;
  }
  .sui-single-option-facet__item {
    display: flex;
    justify-content: space-between;
  }
  .sui-single-option-facet__link {
    color: var(--link-color);
    position: relative;
    text-decoration: none;
    list-style: none;
    padding: 0;
    font-weight: bold;
  }
  .sui-single-option-facet__link:after {
    content: '';
    opacity: 0;
    position: absolute;
    top: -1px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100% + 2px);
    background: rgba(37, 139, 248, 0.08);
    pointer-events: none;
  }
  .sui-single-option-facet__link:focus {
    color: var(--link-color);
    font-weight: bold;
    outline: none;
  }
  .sui-single-option-facet__link:hover {
    color: var(--link-color);
    font-weight: bold;
  }
  .sui-single-option-facet__link:hover:after {
    opacity: 1;
  }
  .sui-single-option-facet__selected {
    font-weight: 900;
    list-style: none;
  }
  .sui-single-option-facet__selected a {
    font-weight: 100;
    padding: 0 2px;
  }
  .sui-single-option-facet__remove {
    color: #666;
    margin-left: 10px;
  }
  .sui-paging {
  }
  .sui-paging > li {
    border: none;
    background: transparent;
    outline: none;
  }
  .sui-paging .rc-pagination-disabled a {
    color: #ccc;
    opacity: 0.5;
  }
  .sui-paging .rc-pagination-item a {
    color: var(--link-color);
    text-decoration: none;
  }
  .sui-paging .rc-pagination-item:hover {
    background: var(--tertiary-background-color);
  }
  .sui-paging .rc-pagination-item:hover a {
    color: var(--link-color);
    text-decoration: none;
  }
  .sui-paging .rc-pagination-item-active a {
    color: var(--link-color);
    font-weight: 700;
  }
  .sui-paging .rc-pagination-item-active:hover {
    background: transparent;
    cursor: not-allowed;
  }
  .sui-paging .rc-pagination-item-active:hover a {
    color: var(--link-color);
    cursor: not-allowed;
  }
  .sui-paging .rc-pagination-next:hover {
    background: var(--tertiary-background-color);
  }
  .sui-paging .rc-pagination-next:hover a {
    color: var(--link-color);
  }
  .sui-paging .rc-pagination-jump-next:hover {
    background: var(--tertiary-background-color);
  }
  .sui-paging .rc-pagination-jump-next:hover a {
    color: var(--link-color);
  }
  .sui-paging .rc-pagination-jump-next:hover:after {
    color: var(--link-color);
    content: '\\${BB}';
    font-size: 16px;
    line-height: 1.5;
  }
  .sui-paging .rc-pagination-jump-prev:hover {
    background: var(--tertiary-background-color);
  }
  .sui-paging .rc-pagination-jump-prev:hover a {
    color: var(--link-color);
  }
  .sui-paging .rc-pagination-jump-prev:hover:after {
    color: var(--link-color);
    content: '\\${AB}';
    font-size: 16px;
    line-height: 1.5;
  }
  .sui-paging-info {
    margin: 1rem 0;
    color: var(--primary-text-color);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-size: 12px;
    display: inline-block;
  }
  .sui-result {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    list-style: none;
    padding: 24px 0;
    text-decoration: none;
    display: block;
    background: transparent;
    border-radius: 4px;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
    overflow-wrap: break-word;
    overflow: hidden;
    a {
      color: var(--link-color);
    }
  }
  .sui-result + .sui-result {
    margin-top: 0;
  }
  .sui-result em {
    position: relative;
    color: var(--link-color);
    font-weight: 700;
    font-style: inherit;
  }
  .sui-result em:after {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    background: ${rgba('#007e8a', 0.2)};
    pointer-events: none;
  }
  .sui-result__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sui-result__title {
    font-size: inherit;
    font-weight: 400;
    text-decoration: none;
  }
  .sui-result__title-link {
    color: var(--link-color);
    text-decoration: none;
  }
  .sui-result__key {
    font-family: monospace;
    font-weight: 400;
    font-size: 14px;
    flex: 0 1 50%;
    color: #777777;
  }
  .sui-result__key:before {
    content: '';
  }
  .sui-result__key:after {
    content: '": ';
  }
  .sui-result__value {
    font-weight: 400;
    font-size: 14px;
  }
  .sui-result__version {
    font-size: 12px;
    display: inline;
    vertical-align: bottom;
  }
  .sui-result__license {
    font-size: 12px;
    color: #999999;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 3px;
    line-height: 1;
    padding: 4px 4px 3px 4px;
  }
  .sui-result__body {
    line-height: 1.5;
    margin-top: 0;
    display: flex;
  }
  .sui-result__body p {
    margin: 0;
  }
  .sui-result__details {
    list-style: none;
    padding: 12px 24px;
    padding-left: 0;
  }
  .sui-results-container {
    padding: 0;
    list-style: none;
    overflow-y: auto;
    flex: 1;
  }
  .sui-results-per-page {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color: #4a4b4b;
    font-size: 12px;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .sui-results-per-page__label {
    margin-right: 8px;
  }
  .sui-results-per-page .sui-select__control {
    align-items: center;
  }
  .sui-results-per-page .sui-select__control input {
    position: absolute;
  }
  .sui-search-box {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: stretch;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
  }
  .sui-search-box__submit {
    flex-shrink: 0;
    font-family: inherit;
    font-size: 14px;
    padding: 16px;
    margin-left: 10px;
    text-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px;
    color: white;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset,
      rgba(59, 69, 79, 0.05) 0px 1px 0px;
    background: linear-gradient(#2da0fa, #3158ee) #2f7cf4;
    cursor: pointer;
    border-radius: 4px;
  }
  .sui-search-box__submit:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 0px 1px inset,
      rgba(59, 69, 79, 0.3) 0px 2px 4px;
    background: linear-gradient(#3cabff, #4063f0) #3d84f7;
  }
  .live-filtering .sui-search-box__submit {
    display: none;
  }
  .sui-search-box__wrapper {
    width: 100%;
    height: 100%;
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border-radius: 3px;
    position: relative;
  }
  .sui-search-box__text-input {
    border-radius: 4px;
    border: none;
    padding: 0;
    outline: none;
    position: relative;
    font-family: inherit;
    font-size: 14px;
    width: 100%;
  }
  .sui-search-box__text-input:focus {
    box-shadow: rgba(59, 69, 79, 0.3) 0px 2px 4px;
    border-top: 1px solid var(--link-color);
    border-left: 1px solid var(--link-color);
    border-right: 1px solid var(--link-color);
    border-bottom: 1px solidvar(--link-color);
  }
  .autocomplete .sui-search-box__text-input {
    box-shadow: rgba(59, 69, 79, 0.3) 0px 2px 4px;
  }
  .sui-search-box__autocomplete-container {
    display: none;
    flex-direction: column;
    left: 0;
    right: 0;
    top: 110%;
    margin: 0;
    padding: 24px 0 12px 0;
    line-height: 1.5;
    background: transparent;
    position: absolute;
    box-shadow: rgba(59, 69, 79, 0.3) 0px 2px 4px;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .autocomplete .sui-search-box__autocomplete-container {
    display: flex;
    z-index: 1;
  }
  .sui-search-box__autocomplete-container ul {
    list-style: none;
    margin: 0;
    padding: 0 0 24px 0;
    background: transparent;
    border-radius: 3px;
  }
  .sui-search-box__autocomplete-container ul:last-child {
    padding: 0;
  }
  .sui-search-box__autocomplete-container li {
    margin: 0 12px;
    font-size: 0.9em;
    padding: 4px 12px;
    border-radius: 4px;
    cursor: default;
  }
  .sui-search-box__autocomplete-container li em {
    font-style: normal;
    background: #edf0fd;
  }
  .sui-search-box__autocomplete-container li:hover {
    background: var(--link-color);
  }
  .sui-search-box__autocomplete-container li:hover em {
    background: transparent;
  }
  .sui-search-box__autocomplete-container li[aria-selected='true'] {
    background: var(--link-color);
  }
  .sui-search-box__autocomplete-container li[aria-selected='true'] em {
    background: transparent;
  }
  .sui-search-box__section-title {
    font-size: 0.7em;
    letter-spacing: 1px;
    font-weight: normal;
    padding: 0 0 4px 24px;
    text-transform: uppercase;
  }
  .sui-sorting {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    display: inline-block;
    width: 100%;
  }
  .sui-sorting__label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .sui-select {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-size: 0.875rem;
    margin-top: 8px;
    width: 100%;
  }
  .sui-select--inline {
    margin-top: 0;
  }
  .sui-select--is-disabled {
    opacity: 0.5;
  }
  .sui-select__control {
    background-color: var(--tertiary-background-color);
    border: 1px solid #a6a6a6;
    border-radius: 4px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }
  .sui-select__control--is-focused {
    border: 1px solid var(--link-color);
  }
  .sui-select__value-container {
    padding-top: 0;
    padding-bottom: 0;
  }
  .sui-select__value-container--has-value {
    font-weight: 700;
  }
  .sui-select__placeholder {
    white-space: nowrap;
    position: static;
    transform: none;
  }
  .sui-select__dropdown-indicator {
    display: flex;
    height: 32px;
    width: 32px;
    align-items: center;
    justify-content: center;
  }
  .sui-select__option-count {
    color: #888888;
    font-size: 0.8em;
  }
  .sui-select__option-label {
    color: var(--link-color);
  }
  .sui-select__option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    padding: 8px 12px;
    cursor: pointer;
  }
  .sui-select__option--is-selected {
    background: #ffffff;
    font-weight: 700;
  }
  .sui-select__option--is-selected .sui-search-select__option-label {
    position: relative;
  }
  .sui-select__option:hover {
    background: var(--tertiary-background-color);
  }

`;
