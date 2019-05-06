import * as fileSaver from 'file-saver';

export const saveFile = (blobContent: Blob, fileName: string) => {
    const blob = new Blob([blobContent], { type: 'application/octet-stream' });
    fileSaver.saveAs(blob, fileName);
};
