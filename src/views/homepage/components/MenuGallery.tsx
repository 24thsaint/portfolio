import React from 'react'
import { Grid } from '@material-ui/core'

interface MenuGalleryProps {
    children: React.ReactNode[] | React.ReactNode
}

const MenuGallery = (props: MenuGalleryProps) => {
    return <Grid container justify="center" spacing={10}>
        {props.children}
    </Grid>
}

export default MenuGallery