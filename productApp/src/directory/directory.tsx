import React from "react";
import { DirectoryMenu, HomePageWrapper } from './directory.style';
import MenuItem from '../menuItem/menu-item';
import { useRecoilValue } from 'recoil';
import { ItemsDirectory } from "Shell/Atoms"

export interface IDirectoryItem {
    id: number;
    imageUrl: string;
    linkUrl: string;
    title: string;
    size?: string;
}

const Directory = () => {
    const sections: IDirectoryItem[] = useRecoilValue(ItemsDirectory);
    return (
        <HomePageWrapper>
            <DirectoryMenu>
                {
                    sections.map(({title, imageUrl, id, size, linkUrl}: IDirectoryItem) => {
                    return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                    })
                }
            </DirectoryMenu>
        </HomePageWrapper>
    );
};

export default Directory;