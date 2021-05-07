import React, { ReactElement } from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'

function Header(): ReactElement {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Chess Watcher
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
