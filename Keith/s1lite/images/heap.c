#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct{
    int max;
    int size;
    int *elements;
}heap;

heap *create(int max){
    heap *h=(heap*)malloc(sizeof(heap));
    if(h==NULL){
        fprintf(stderr, "Memory out of space!\n");
        exit(EXIT_FAILURE);
    }
    h->elements=(int *)malloc(sizeof(int)*max);
    if(h->elements==NULL){
        fprintf(stderr, "Memory out of space!\n");
        exit(EXIT_FAILURE);
    }
    h->max=max;
    h->size=0;
    return h;
}

bool isFull(heap *h){
    if(h->size==h->max) return true;
    return false;
}

bool isEmpty(heap *h){
    if(h->size==0) return true;
    return false;
}

void insert(heap *h, int x){
    if(isFull(h)){
       error("Priority Queue is full!\n"); 
    }else{
        int i;
        for(i=++h->size;h->elements[i/2]<x;h->elements[i]=h->elements[i/2], i/=2);
        h->elements[i]=x;
    }
}

void deleteMax(heap *h){
    if(isEmpty(h)){
        fprintf(stderr, "Priority Queue is empty!\n");
    }else{
        int i;
        for(i=0;i<h->size;i=(i*2)+1){
            
        }
    }
}

void view(int *heap, int index, int tabs, int heap_size){
    int i;
    if((heap!=NULL) && (index<=heap_size)){
         view(heap, (index*2)+1, tabs+1, heap_size);
         for(i = 0; i < tabs; i++) printf("\t");
             printf("%2i\n", heap[index-1]);
             view(heap, index*2, tabs+1, heap_size);
    }
}

int main(void){
    
    return 0;
}
/*
 * HEAP SORT 
int leftChild(int i){
        return 2 * i + 1;
}

int rightChild(int i){
        return 2 * i + 2;
}
 
void percolateDown(int a[], int root, int bottom) {
        int maxChild;
 
        maxChild = (rightChild(root) <= bottom && a[leftChild(root)] < a[rightChild(root)])? rightChild(root):leftChild(root);
        if(maxChild > bottom || a[root] >= a[maxChild]) return;
        swap(&a[root], &a[maxChild]);   
        percolateDown(a, maxChild, bottom);     
}

void heapsort(int a[], int n) {//heap sort
        int i;

        for (i = (n/2)-1; i >= 0; i--) {
                percolateDown(a, i, n - 1);
        }
 
        for (i = n-1; i >= 1; i--) {
                swap(&a[0], &a[i]);
                percolateDown(a, 0, i - 1);
        }
}
 */
