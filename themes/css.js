export function regular() {
    return `
        <style id="colorTheme">
            :root {
                --body_background: #f1f1f1;
                --content_background: #ffffff;
                --important_background: #ff3838;
                --accent_background: #9d56a2cc;
                --sub_background: #aaaaaa;
                
                --font_color_title: #9d56a2cc;
                --font_color_regular: #444;
                --font_color_accent: #ffffff;
                --font_color_placeholder: #aaa;
                --font_color_select_options: #444;
                            
                --icon_fill_accent: #ffffff;
                --icon_fill_regular: #cccccc;
                --icon_fill_bold: #9d56a2;
                --icon_fill_remove: #ff3838;
                
                --input_color_regular: #cccccc;
                --input_color_focus: #9d56a2;
                --input_color_success: #009C4F;
                --input_color_error: #ff3838;
                
                --button_background_submit: #9d56a2;
                
                --block_shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                --icon_switch_theme: rgba( 255, 152, 43, 0.8);
                
                --divider_color: #D1CFCF;
                --border_accent_color: #9d56a2;
            }
        </style>
    `;
}

export function dark() {
    return `
        <style id="colorTheme">
            :root {
                --body_background: #000000;
                --content_background: #444;
                --important_background: #ff3838;
                --accent_background: rgba( 255, 152, 43, 0.8);
                --sub_background: #cccccc;
                
                --font_color_title: rgba( 255, 152, 43, 0.8);
                --font_color_regular: #f1f1f1;
                --font_color_accent: #ffffff;
                --font_color_placeholder: #ccc;
                --font_color_select_options: #444;
                
                --icon_fill_accent: #ffffff;
                --icon_fill_regular: #efefef;
                --icon_fill_bold: rgba( 255, 152, 43, 1);
                --icon_fill_remove: #ff3838;
                
                --input_color_regular: #ffffff;
                --input_color_focus: rgba( 255, 152, 43, 1);
                --input_color_success: #009C4F;
                --input_color_error: #ff3838;
                
                --button_background_submit: rgba( 255, 152, 43, 1);
                
                --block_shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                --icon_switch_theme: #ffffff;
                
                --divider_color: #EFEFEF;
                --border_accent_color: rgba( 255, 152, 43, 1);;
            }
        </style>
    
    `;
}