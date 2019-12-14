export interface BiSListData {
    title: string;
    comparisonFeatures: {
        [key: string]: ComparisonFeature;
    }
    slots: SlotData[];
}

export interface ComparisonFeature {
    title: string;
}

export interface SlotData {
    title: string;
    items: ItemData[];
}

export interface ItemData {
    id: number;
    name: string;
    phase?: number;
    comparisonValues: {
        [key: string]: number;
    };
}