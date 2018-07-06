#!/usr/bin/env bash
echo 'Hello'
export SHELL=/bin/bash
export XDG_CONFIG_HOME=/home/pi/.config
export XDG_MENU_PREFIX=lxde-pi-
export XDG_VTNR=7
export XDG_SESSION_ID=c2
export XDG_GREETER_DATA_DIR=/var/lib/lightdm/data/pi
export XDG_SESSION_TYPE=x11
export XDG_DATA_DIRS=/usr/local/share:/usr/share/raspi-ui-overrides:/usr/share:/usr/share/gdm:/var/lib/menu-xdg
export XDG_SESSION_DESKTOP=lightdm-xsession
export XDG_SEAT_PATH=/org/freedesktop/DisplayManager/Seat0
export XDG_CURRENT_DESKTOP=LXDE
export XDG_SEAT=seat0
export XDG_RUNTIME_DIR=/run/user/1000
export XDG_SESSION_PATH=/org/freedesktop/DisplayManager/Session0
export XDG_CONFIG_DIRS=/etc/xdg


export DISPLAY=:0.0 &&
INFINALITY_FT_CHROMEOS_STYLE_SHARPENING_STRENGTH=0 &&
INFINALITY_FT_AUTOHINT_INCREASE_GLYPH_HEIGHTS=true &&
INFINALITY_FT_CONTRAST=0 &&
XDG_VTNR=7 &&
SSH_AUTH_SOCK=/tmp/ssh-fHA9HCPIXudW/agent.501 &&
INFINALITY_FT_STEM_FITTING_STRENGTH=25 &&
INFINALITY_FT_GLOBAL_EMBOLDEN_X_VALUE=0 &&
XDG_SESSION_ID=c2 &&
XDG_GREETER_DATA_DIR=/var/lib/lightdm/data/pi &&
USER=pi &&
DESKTOP_SESSION=LXDE-pi &&
INFINALITY_FT_AUTOHINT_SNAP_STEM_HEIGHT=100 &&
INFINALITY_FT_GRAYSCALE_FILTER_STRENGTH=0 &&
INFINALITY_FT_GAMMA_CORRECTION=0 &&
QT_QPA_PLATFORMTHEME=qt5ct &&
PWD=/home/pi &&
HOME=/home/pi &&
TEXTDOMAIN=Linux-PAM &&
SSH_AGENT_PID=640 &&
XDG_SESSION_TYPE=x11 &&
XDG_DATA_DIRS=/usr/local/share:/usr/share/raspi-ui-overrides:/usr/share:/usr/share/gdm:/var/lib/menu-xdg &&
XDG_SESSION_DESKTOP=lightdm-xsession &&
INFINALITY_FT_WINDOWS_STYLE_SHARPENING_STRENGTH=10 &&
SAL_USE_VCLPLUGIN=gtk &&
INFINALITY_FT_BRIGHTNESS=0 &&
TERM=xterm &&
SHELL=/bin/bash &&
XDG_SEAT_PATH=/org/freedesktop/DisplayManager/Seat0 &&
INFINALITY_FT_USE_VARIOUS_TWEAKS=true &&
XDG_CURRENT_DESKTOP=LXDE &&
GPG_AGENT_INFO=/run/user/1000/gnupg/S.gpg-agent:0:1 &&
SHLVL=1 &&
XDG_SEAT=seat0 &&
LANGUAGE=en_ZA.UTF-8 &&
INFINALITY_FT_BOLD_EMBOLDEN_Y_VALUE=0 &&
INFINALITY_FT_GLOBAL_EMBOLDEN_Y_VALUE=0 &&
INFINALITY_FT_AUTOHINT_HORIZONTAL_STEM_DARKEN_STRENGTH=10 &&
GDMSESSION=lightdm-xsession &&
LOGNAME=pi &&
DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1000/bus &&
XDG_RUNTIME_DIR=/run/user/1000 &&
XAUTHORITY=/home/pi/.Xauthority &&
XDG_SESSION_PATH=/org/freedesktop/DisplayManager/Session0 &&
XDG_CONFIG_DIRS=/etc/xdg &&
#PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/games:/usr/games &&
#INFINALITY_FT_FILTER_PARAMS=11 22 38 22 11 &&
INFINALITY_FT_USE_KNOWN_SETTINGS_ON_SELECTED_FONTS=true &&
INFINALITY_FT_STEM_SNAPPING_SLIDING_SCALE=40 &&
INFINALITY_FT_STEM_ALIGNMENT_STRENGTH=25 &&
INFINALITY_FT_AUTOHINT_VERTICAL_STEM_DARKEN_STRENGTH=25 &&
INFINALITY_FT_BOLD_EMBOLDEN_X_VALUE=0 &&
INFINALITY_FT_FRINGE_FILTER_STRENGTH=0 &&



echo $(env) >> /home/pi/en.txt
su pi -c "/usr/bin/xinput --set-prop 'FT5406 memory based driver' 'Coordinate Transformation Matrix' 0 1 0 -1 0 1 0 0 1"
echo $? >> /home/pi/result
echo 'Chrome'
su pi -c 'chromium-browser --display=:0 -kiosk https://team-andromeda.github.io/wall-pi'



exit 0

